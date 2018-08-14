# Holy Mackerel

To Install

1. Clone this repo
2. cd into repo folder on local machine
3. run `docker build -t <enter any_name here to name your image> .`
4. run `docker-compose build`

In the root folder run
1. `./mix deps get`
2. `./mix ecto.create`
3. `./mix ecto.migrate`

While you are in the **src** folder  
`cd assets && npm install`  

To build and start your container (recreates):  
`docker-compose up`  

To view your images:  
`docker images`  

To view your containers:  
`docker container ls` (will show you only started containers)  
`docker container ls --all` (will show you all containers, stopped and started)  

To stop your containers:  
`docker stop <name_of_app_container> <name_of_db_container>`  

To re-start your containers:  
`docker start <name_of_app_container> <name_of_db_container>`  
