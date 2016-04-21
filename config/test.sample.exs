use Mix.Config

# Configure your database
config :rocket_nanny, RocketNanny.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "rocket_nanny_test",
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

config :api, Api.Endpoint,
  socket_url: "ws://localhost:4001",
  api_url: "http://localhost:4001"
