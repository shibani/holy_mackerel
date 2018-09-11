defmodule YelpWeb.PageControllerTest do
  use YelpWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    html = html_response(conn, 200)
    assert html =~ ~r("react-app")
  end
end
