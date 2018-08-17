defmodule Yelp.RestaurantView do
  use Yelp.Web, :view

  def render("index.json", %{restaurants: restaurants}) do
    %{data: render_many(restaurants, Yelp.RestaurantView, "restaurant.json")}
  end

  def render("show.json", %{restaurant: restaurant}) do
    %{data: render_one(restaurant, Yelp.RestaurantView, "restaurant.json")}
  end

  def render("restaurant.json", %{restaurant: restaurant}) do
    %{id: restaurant.id,
      name: restaurant.name,
      address1: restaurant.address1,
      address2: restaurant.address2,
      city: restaurant.city,
      state: restaurant.state,
      phone: restaurant.phone,
      website: restaurant.website}
  end
end
