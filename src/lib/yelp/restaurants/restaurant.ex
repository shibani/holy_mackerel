defmodule Yelp.Restaurants.Restaurant do
  use Ecto.Schema
  import Ecto.Changeset


  schema "restaurants" do
    field :address1, :string
    field :address2, :string
    field :city, :string
    field :name, :string
    field :phone, :string
    field :state, :string
    field :website, :string

    timestamps()
  end

  @doc false
  def changeset(restaurant, attrs) do
    restaurant
    |> cast(attrs, [:name, :address1, :address2, :city, :state, :phone, :website])
    |> validate_required([:name, :address1, :address2, :city, :state, :phone, :website])
  end
end
