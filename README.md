# Holy Mackerel

**To Install**

* Clone this repo
* cd into repo folder on local machine
* run `docker build -t <enter any_name here to name your image> .`
* run `docker-compose build`

**In the root folder run**
* `./mix deps get`
* `./mix ecto.create`
* `./mix ecto.migrate`

**cd from the root into the** `src` **folder. Now run:**  
`cd assets && npm install`  
<sup><sub>**Note:** When installing npm, the auto-installed Growl 1.8.1 dependency shows up as a critical vulnerability in Git. To fix this, cd into `assets` and open `package-lock.json`.  Find and replace all Growl 1.8.1 dependencies with 1.10.0)</sub></sup>

**To build and start your container (recreates):**  
`docker-compose up`  

___

**To view your images:**  
`docker images`  

**To view your containers:**  
`docker container ls` (will show you only started containers)  
`docker container ls --all` (will show you all containers, stopped and started)  

**To stop your containers:**  
`docker stop <name_of_app_container> <name_of_db_container>`  

**To re-start your containers:**  
`docker start <name_of_app_container> <name_of_db_container>`  
