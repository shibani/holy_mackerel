defmodule Yelp.Repo.Migrations.CreateRestaurant do
  use Ecto.Migration

  def change do
    create table(:restaurants) do
      add :name, :string
      add :address1, :string
      add :address2, :string
      add :city, :string
      add :state, :string
      add :phone, :string
      add :website, :string

      timestamps()
    end
  end
end
