use Mix.Config

# Configure your database
config :rocket_nanny, RocketNanny.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "rocket_nanny_dev",
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  pool_size: 10

config :rocket_nanny, RocketNanny.Endpoint,
  socket_url: "ws://localhost:4001",
  api_url: "http://localhost:4001"
