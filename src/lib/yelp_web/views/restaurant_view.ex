defmodule YelpWeb.RestaurantView do
  use YelpWeb, :view
  alias YelpWeb.RestaurantView

  def render("index.json", %{restaurants: restaurants}) do
    %{data: render_many(restaurants, RestaurantView, "restaurant.json")}
  end

  def render("show.json", %{restaurant: restaurant}) do
    %{data: render_one(restaurant, RestaurantView, "restaurant.json")}
  end

  def render("restaurant.json", %{restaurant: restaurant}) do
    %{id: restaurant.id,
      name: restaurant.name,
      address1: restaurant.address1,
      address2: restaurant.address2,
      city: restaurant.city,
      state: restaurant.state,
      phone: restaurant.phone,
      website: restaurant.website
    }
  end
end
