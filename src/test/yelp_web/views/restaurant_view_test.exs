defmodule YelpWeb.RestaurantViewTest do
  use YelpWeb.ConnCase, async: true

  alias Yelp.Restaurants

  alias YelpWeb.RestaurantView

  @create_attrs1 %{address1: "some address1", address2: "some address2", city: "some city", name: "Foo Restaurant", phone: "some phone", state: "some state", website: "some website", slug: "some-name"}

  def fixture(:restaurant) do
    {:ok, restaurant} = Restaurants.create_restaurant(@create_attrs1)
    restaurant
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  test "index.json lists all restaurants" do
    restaurant = fixture(:restaurant)
    expected_restaurant = %{
        id: restaurant.id,
        name: restaurant.name,
        address1: restaurant.address1,
        address2: restaurant.address2,
        city: restaurant.city,
        state: restaurant.state,
        phone: restaurant.phone,
        website: restaurant.website,
        slug: restaurant.slug
      }

    rendered_restaurants = RestaurantView.render("index.json", %{restaurants: [restaurant]})
    assert rendered_restaurants == %{
      data: [expected_restaurant]
    }
  end

  test "show.json" do
    restaurant = fixture(:restaurant)
    expected_restaurant = %{
        id: restaurant.id,
        name: restaurant.name,
        address1: restaurant.address1,
        address2: restaurant.address2,
        city: restaurant.city,
        state: restaurant.state,
        phone: restaurant.phone,
        website: restaurant.website,
        slug: restaurant.slug
    }
    rendered_restaurant = RestaurantView.render("show.json", %{restaurant: restaurant})

    assert rendered_restaurant == %{
      data: expected_restaurant
    }
  end
end
