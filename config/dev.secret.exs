use Mix.Config

# Configure your database
config :rocket_nanny, RocketNanny.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "rocket_nanny_dev",
  hostname: "localhost",
  pool_size: 10

config :rocket_nanny, RocketNanny.Endpoint,
  socket_url: "ws://127.0.0.1:4001",
  api_url: "http://127.0.0.1:4001"