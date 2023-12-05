# NPM relevant commands:

* npm install

* npm start


# Docker relevant commands:

SHOW DOCKER IMAGES
* docker images

BUILD DOCKER IMAGE USING DOCKERFILE
* docker build -t server-image .

RUN DOCKER CONTAINER FROM DOCKER IMAGE
* docker run --name server-container -p 8000:8000 server-image

CREATE DOCKER CONTAINER FROM DOCKER IMAGE
* docker create --name server-container -p 8000:8000 server-image

SHOW ALL CONTAINERS
* docker ps -a

REMOVE SERVER CONTAINER
* docker rm server-container

REMOVE SERVER IMAGE
* docker rmi server-image

STOP SERVER CONTAINER
* docker stop server-container

START SERVER CONTAINER
* docker start --attach server-container