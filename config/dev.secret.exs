use Mix.Config

# Configure your database
config :rocket_nanny, RocketNanny.Repo,
  adapter: Ecto.Adapters.Postgres,
  database: "rocket_nanny_dev",
  hostname: "localhost",
  pool_size: 10