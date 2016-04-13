use Mix.Config

# Configure your database
config :rocket_nanny, RocketNanny.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "rocket_nanny_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
