defmodule YelpWeb.RestaurantController do
  use YelpWeb, :controller

  alias Yelp.Restaurants
  alias Yelp.Restaurants.Restaurant

  action_fallback YelpWeb.FallbackController

  def index(conn, _params) do
    restaurants = Restaurants.list_restaurants()
    render(conn, "index.json", restaurants: restaurants)
  end

  def create(conn, %{"restaurant" => restaurant_params}) do
    with {:ok, %Restaurant{} = restaurant} <- Restaurants.create_restaurant(restaurant_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", restaurant_path(conn, :show, restaurant))
      |> render("show.json", restaurant: restaurant)
    end
  end

  def show(conn, %{"id" => id}) do
    restaurant = Restaurants.get_restaurant!(id)
    render(conn, "show.json", restaurant: restaurant)
  end

  def update(conn, %{"id" => id, "restaurant" => restaurant_params}) do
    restaurant = Restaurants.get_restaurant!(id)

    with {:ok, %Restaurant{} = restaurant} <- Restaurants.update_restaurant(restaurant, restaurant_params) do
      render(conn, "show.json", restaurant: restaurant)
    end
  end

  def delete(conn, %{"id" => id}) do
    restaurant = Restaurants.get_restaurant!(id)
    with {:ok, %Restaurant{}} <- Restaurants.delete_restaurant(restaurant) do
      send_resp(conn, :no_content, "")
    end
  end
end
