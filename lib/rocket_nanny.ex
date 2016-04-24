defmodule RocketNanny do
  use Application

  # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Start the endpoint when the application starts
      supervisor(RocketNanny.Endpoint, []),
      # Start the Ecto repository
      supervisor(RocketNanny.Repo, []),
      # Here you could define other workers and supervisors as children
      # worker(RocketNanny.Worker, [arg1, arg2, arg3]),
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: RocketNanny.Supervisor]
    res = Supervisor.start_link(children, opts)
    Ecto.Migrator.run(RocketNanny.Repo, Path.join(["#{:code.priv_dir(:rocket_nanny)}", "repo", "migrations"]), :up, all: true)
    res
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    RocketNanny.Endpoint.config_change(changed, removed)
    :ok
  end
end
