# NPM relevant commands:

* npm install

* npm start


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
