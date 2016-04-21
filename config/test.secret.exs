use Mix.Config

# Configure your database
config :rocket_nanny, RocketNanny.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "rocket_nanny_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

config :api, Api.Endpoint,
  socket_url: "ws://127.0.0.1:4001",
  api_url: "http://127.0.0.1:4001"
