ExUnit.start

Mix.Task.run "ecto.create", ~w(-r RocketNanny.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r RocketNanny.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(RocketNanny.Repo)

