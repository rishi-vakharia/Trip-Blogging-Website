Frontend

* There are no env variables for /frontend

* Just npm install and npm start


Backend

* Connection to database will be made in /backend/database/db.js


- MONGODB:
	- username: rishi, 
	- password: ElQwsCjHqEcjN00F, 
	- IP Access List: 119.161.98.68/32, 
	- Description: My IP Address


ELK

%{TIMESTAMP_ISO8601:timestamp} %{WORD:method} %{URIPATHPARAM:url} %{GREEDYDATA:req_data} %{BASE10NUM:res_status} %{DATA:res_content_length} %{BASE16FLOAT:res_time} ms

FE

# NPM relevant commands:

* npm install

* npm start


# Docker relevant commands:

SHOW DOCKER IMAGES
* docker images

BUILD DOCKER IMAGE USING DOCKERFILE
* docker build -t frontend-image .

RUN (CREATE & START) DOCKER CONTAINER FROM DOCKER IMAGE
* docker run --name frontend-container -p 3000:3000 frontend-image

CREATE (DON'T START) DOCKER CONTAINER FROM DOCKER IMAGE
* docker create --name frontend-container -p 3000:3000 frontend-image

START CONTAINER
* docker start --attach frontend-container

SHOW ALL CONTAINERS
* docker ps -a

STOP CONTAINER
* docker stop frontend-container

REMOVE CONTAINER
* docker rm frontend-container

REMOVE IMAGE
* docker rmi frontend-image


BE

# NPM relevant commands:

* npm install

* npm start

* npm test
  (For testing signin)
  
# Docker relevant commands:

SHOW DOCKER IMAGES
* docker images

BUILD DOCKER IMAGE USING DOCKERFILE
* docker build -t backend-image .

RUN (CREATE & START) DOCKER CONTAINER FROM DOCKER IMAGE
* docker run --name backend-container -p 8000:8000 backend-image

CREATE (DON'T START) DOCKER CONTAINER FROM DOCKER IMAGE
* docker create --name backend-container -p 8000:8000 backend-image

START CONTAINER
* docker start --attach backend-container

SHOW ALL CONTAINERS
* docker ps -a

STOP CONTAINER
* docker stop backend-container

REMOVE CONTAINER
* docker rm backend-container

REMOVE IMAGE
* docker rmi backend-image
