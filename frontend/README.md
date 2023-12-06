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
