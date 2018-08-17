# Holy Mackerel

**To Install**

* Clone this repo
* From the command line, cd into repo folder on local machine
* run `docker build -t <enter any_name here to name your image> .`
* run `docker-compose build`

**In the root folder run**
* `./mix deps.get`
* `./mix ecto.create`
* `./mix ecto.migrate`

**cd from the root into the** `src` **folder. Now run:**  
`cd assets && npm install`  
&nbsp;  
**Note:** When running `npm install` above, the auto-installed `Growl 1.8.1` dependency shows up as a critical vulnerability in Git. To fix this, cd into `assets` and open `package-lock.json`.  Find and replace all `Growl 1.8.1` dependencies with `Growl 1.10.0`)

**To build and start up your container (recreates the container):**  
`docker-compose up`  

**To view your project in a browser:**  
Navigate to http://localhost:4000/
___

**To view your images:**  
In terminal, enter: `docker images`  

**To view your containers:**  
`docker container ls` (will show you only started containers)  
`docker container ls --all` (will show you all containers, stopped and started)  

**To stop your containers:**  
`docker stop <name_of_app_container> <name_of_db_container>`  

**To re-start your containers without re-creating them:**  
`docker start <name_of_app_container> <name_of_db_container>`  
___

**To run tests:**  
In root folder run
`./mix tests`
