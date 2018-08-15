use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :yelp, YelpWeb.Endpoint,
  http: [port: 4001],
  server: true

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :yelp, Yelp.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "yelp_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox
