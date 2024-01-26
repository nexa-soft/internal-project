# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Build the Angular application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 4200

# Command to run the application
CMD ["npm", "start"]
