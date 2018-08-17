defmodule Yelp.RestaurantController do
  use Yelp.Web, :controller

  alias Yelp.Restaurant

  def index(conn, _params) do
    restaurants = Repo.all(Restaurant)
    render(conn, "index.json", restaurants: restaurants)
  end

  def create(conn, %{"restaurant" => restaurant_params}) do
    changeset = Restaurant.changeset(%Restaurant{}, restaurant_params)

    case Repo.insert(changeset) do
      {:ok, restaurant} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", restaurant_path(conn, :show, restaurant))
        |> render("show.json", restaurant: restaurant)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Yelp.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    restaurant = Repo.get!(Restaurant, id)
    render(conn, "show.json", restaurant: restaurant)
  end

  def update(conn, %{"id" => id, "restaurant" => restaurant_params}) do
    restaurant = Repo.get!(Restaurant, id)
    changeset = Restaurant.changeset(restaurant, restaurant_params)

    case Repo.update(changeset) do
      {:ok, restaurant} ->
        render(conn, "show.json", restaurant: restaurant)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Yelp.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    restaurant = Repo.get!(Restaurant, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(restaurant)

    send_resp(conn, :no_content, "")
  end
end
