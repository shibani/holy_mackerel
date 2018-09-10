defmodule YelpWeb.RestaurantControllerTest do
  use YelpWeb.ConnCase

  alias Yelp.Restaurants
  alias Yelp.Restaurants.Restaurant

  @create_attrs %{address1: "some address1", address2: "some address2", city: "some city", name: "some name", phone: "some phone", state: "some state", website: "some website", slug: "some-name"}
  @update_attrs %{address1: "some updated address1", address2: "some updated address2", city: "some updated city", name: "some updated name", phone: "some updated phone", state: "some updated state", website: "some updated website", slug: "some-updated-name"}
  @valid_attrs %{address1: "address1", address2: "address2", city: "city", name: "name", phone: "phone", state: "state", website: "website", slug: "name"}
  @invalid_attrs %{address1: nil, address2: nil, city: nil, name: nil, phone: nil, state: nil, website: nil, slug: nil}

  def fixture(:restaurant) do
    {:ok, restaurant} = Restaurants.create_restaurant(@create_attrs)
    restaurant
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all restaurants", %{conn: conn} do
      conn = get conn, restaurant_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create restaurant" do
    test "renders restaurant when data is valid", %{conn: conn} do
      conn = post conn, restaurant_path(conn, :create), restaurant: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]
      assert %{"slug" => slug} = json_response(conn, 201)["data"]

      conn = get conn, restaurant_path(conn, :show, slug)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "address1" => "some address1",
        "address2" => "some address2",
        "city" => "some city",
        "name" => "some name",
        "phone" => "some phone",
        "state" => "some state",
        "website" => "some website",
        "slug" => "some-name"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, restaurant_path(conn, :create), restaurant: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update restaurant" do
    setup [:create_restaurant]

    test "renders restaurant when data is valid", %{conn: conn, restaurant: %Restaurant{id: id} = restaurant} do
      conn = put conn, restaurant_path(conn, :update, restaurant), restaurant: @update_attrs

      assert %{"id" => ^id} = json_response(conn, 200)["data"]
      assert %{"slug" => slug} = json_response(conn, 200)["data"]

      conn = get conn, restaurant_path(conn, :show, slug)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "address1" => "some updated address1",
        "address2" => "some updated address2",
        "city" => "some updated city",
        "name" => "some updated name",
        "phone" => "some updated phone",
        "state" => "some updated state",
        "website" => "some updated website",
        "slug" => "some-updated-name"}
    end

    test "renders errors when data is invalid", %{conn: conn, restaurant: restaurant} do
      conn = put conn, restaurant_path(conn, :update, restaurant), restaurant: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete restaurant" do
    setup [:create_restaurant]

    test "deletes chosen restaurant", %{conn: conn, restaurant: restaurant} do
      conn = delete conn, restaurant_path(conn, :delete, restaurant)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, restaurant_path(conn, :show, restaurant)
      end
    end
  end

  defp create_restaurant(_) do
    restaurant = fixture(:restaurant)
    {:ok, restaurant: restaurant}
  end

  test "changeset with valid attributes" do
    changeset = Restaurant.changeset(%Restaurant{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Restaurant.changeset(%Restaurant{}, @invalid_attrs)
    refute changeset.valid?
  end
end
