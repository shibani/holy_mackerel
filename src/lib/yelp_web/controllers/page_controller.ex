defmodule YelpWeb.PageController do
  use YelpWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
