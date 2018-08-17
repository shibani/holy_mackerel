defmodule Yelp.RestaurantTest do
  use Yelp.ModelCase

  alias Yelp.Restaurant

  @valid_attrs %{address1: "some address1", address2: "some address2", city: "some city", name: "some name", phone: "some phone", state: "some state", website: "some website"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Restaurant.changeset(%Restaurant{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Restaurant.changeset(%Restaurant{}, @invalid_attrs)
    refute changeset.valid?
  end
end
