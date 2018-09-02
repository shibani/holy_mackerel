# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :yelp,
  ecto_repos: [Yelp.Repo]

# Configures the endpoint
config :yelp, YelpWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "xjqqTNVOvvtQ/UMlGCdU2fHx7Iv4ak8v6e8douJMwPcO1IN7MApoeDgUwyt2cIqh",
  render_errors: [view: YelpWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Yelp.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
