# Dockerfile for Express server

# Use the official Node.js 16.x image as the base image
FROM node:16

# Set the working directory inside the container to /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Installing dependencies
RUN npm install --silent

# Copy all local files (except the ones in .dockerignore) to 
# the working directory inside the container 
COPY . .

# Expose port 8000
EXPOSE 8000

# Specify the command to run on container start
CMD ["npm","start"]