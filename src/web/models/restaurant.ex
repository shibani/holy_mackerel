defmodule Yelp.Restaurant do
  use Yelp.Web, :model

  schema "restaurants" do
    field :name, :string
    field :address1, :string
    field :address2, :string
    field :city, :string
    field :state, :string
    field :phone, :string
    field :website, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :address1, :address2, :city, :state, :phone, :website])
    |> validate_required([:name, :address1, :address2, :city, :state, :phone, :website])
  end
end
