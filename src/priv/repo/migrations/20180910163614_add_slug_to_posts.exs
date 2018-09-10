defmodule Yelp.Repo.Migrations.AddSlugToPosts do
  use Ecto.Migration

  def change do
    alter table(:restaurants) do
      add :slug, :string
    end

    create index(:restaurants, [:slug], unique: true)
  end
end
