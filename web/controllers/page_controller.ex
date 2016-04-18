defmodule RocketNanny.PageController do
  use RocketNanny.Web, :controller

  def load_page(conn, _params) do
    render conn, "index.html"
  end
end
