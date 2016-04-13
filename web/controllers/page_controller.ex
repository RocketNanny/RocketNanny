defmodule RocketNanny.PageController do
  use RocketNanny.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
