# Use the official Node.js 20.10.0 image
FROM node:20.10.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Copy yarn-lock.json to the working directory
COPY yarn.lock .

# Install npm dependencies
RUN yarn --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3001

# Command to run the application
CMD ["yarn", "start"]

