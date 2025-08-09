# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
# This is done in a separate step to leverage Docker's layer caching.
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port 80 to the outside world, which our server uses
EXPOSE 80

# Command to run the application
CMD [ "node", "server.js" ]
