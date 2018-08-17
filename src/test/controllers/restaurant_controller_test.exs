defmodule Yelp.RestaurantControllerTest do
  use Yelp.ConnCase

  alias Yelp.Restaurant
  @valid_attrs %{address1: "some address1", address2: "some address2", city: "some city", name: "some name", phone: "some phone", state: "some state", website: "some website"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, restaurant_path(conn, :index)
    assert json_response(conn, 200)["data"] == []
  end

  test "shows chosen resource", %{conn: conn} do
    restaurant = Repo.insert! %Restaurant{}
    conn = get conn, restaurant_path(conn, :show, restaurant)
    assert json_response(conn, 200)["data"] == %{"id" => restaurant.id,
      "name" => restaurant.name,
      "address1" => restaurant.address1,
      "address2" => restaurant.address2,
      "city" => restaurant.city,
      "state" => restaurant.state,
      "phone" => restaurant.phone,
      "website" => restaurant.website}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, restaurant_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, restaurant_path(conn, :create), restaurant: @valid_attrs
    assert json_response(conn, 201)["data"]["id"]
    assert Repo.get_by(Restaurant, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, restaurant_path(conn, :create), restaurant: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn} do
    restaurant = Repo.insert! %Restaurant{}
    conn = put conn, restaurant_path(conn, :update, restaurant), restaurant: @valid_attrs
    assert json_response(conn, 200)["data"]["id"]
    assert Repo.get_by(Restaurant, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    restaurant = Repo.insert! %Restaurant{}
    conn = put conn, restaurant_path(conn, :update, restaurant), restaurant: @invalid_attrs
    assert json_response(conn, 422)["errors"] != %{}
  end

  test "deletes chosen resource", %{conn: conn} do
    restaurant = Repo.insert! %Restaurant{}
    conn = delete conn, restaurant_path(conn, :delete, restaurant)
    assert response(conn, 204)
    refute Repo.get(Restaurant, restaurant.id)
  end
end
