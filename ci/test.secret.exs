use Mix.Config

# Configure your database
config :rocket_nanny, RocketNanny.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "rocket_nanny_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

config :rocket_nanny, RocketNanny.Endpoint,
  socket_url: "ws://localhost:4001",
  api_url: "http://localhost:4001"
