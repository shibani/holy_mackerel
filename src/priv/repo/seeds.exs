# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Yelp.Repo.insert!(%Yelp.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Yelp.Repo
alias Yelp.Restaurants.Restaurant

Repo.delete_all Restaurant

Repo.insert! %Restaurant{
  name: "Balthazar",
  address1: "88 Spring Street",
  address2: "",
  city: "New York",
  state: "NY",
  phone: "212-965-1414",
  website: "https://balthazarny.com/",
  slug: "balthazar"
}

Repo.insert! %Restaurant{
  name: "Momofuku Ssam",
  address1: "207 Second Avenue",
  address2: "",
  city: "New York",
  state: "NY",
  phone: "212-254-3500",
  website: "https://ssambar.momofuku.com/",
  slug: "momofuku-ssam"
}

Repo.insert! %Restaurant{
  name: "Maialino",
  address1: "2 Lexington Avenue",
  address2: "",
  city: "New York",
  state: "NY",
  phone: "212-777-2410",
  website: "https://maialinonyc.com/",
  slug: "maialino"
}

Repo.insert! %Restaurant{
  name: "Five Leaves",
  address1: "18 Bedford Avenue",
  address2: "",
  city: "Brooklyn",
  state: "NY",
  phone: "718-383-5345",
  website: "http://fiveleavesny.com/",
  slug: "five-leaves"
}

Repo.insert! %Restaurant{
  name: "Speedy Romeo",
  address1: "376 Classon Avenue",
  address2: "",
  city: "Brooklyn",
  state: "NY",
  phone: "718-230-0061",
  website: "https://www.speedyromeo.com/",
  slug: "speedy-romeo"
}
