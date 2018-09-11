defmodule YelpWeb.PageControllerTest do
  use YelpWeb.ConnCase

  # import Phoenix.View
  import Phoenix.HTML, only: [safe_to_string: 1]

  test "GET /", %{conn: conn} do
    conn = get conn, "/"
    html = html_response(conn, 200)
    assert html =~ ~r("react-app")
  end
end
