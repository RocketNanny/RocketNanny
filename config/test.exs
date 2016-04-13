use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :rocket_nanny, RocketNanny.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# import the config/test.secret.exs
# which is versioned separately so
# people can use their own database
# configurations.
import_config "test.secret.exs"
