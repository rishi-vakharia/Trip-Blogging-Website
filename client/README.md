# NPM relevant commands:

* npm install

* npm start


# Docker relevant commands:

SHOW DOCKER IMAGES
* docker images

BUILD DOCKER IMAGE USING DOCKERFILE
* docker build -t client-image .

RUN DOCKER CONTAINER FROM DOCKER IMAGE
* docker run --name client-container -p 3000:3000 client-image

CREATE DOCKER CONTAINER FROM DOCKER IMAGE
* docker create --name client-container -p 3000:3000 client-image

SHOW ALL CONTAINERS
* docker ps -a

REMOVE CLIENT CONTAINER
* docker rm client-container

REMOVE CLIENT IMAGE
* docker rmi client-image

STOP CLIENT CONTAINER
* docker stop client-container

START CLIENT CONTAINER
* docker start --attach client-container