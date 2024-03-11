# Use the official Node.js 20.10.0 image
FROM node:20.10.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and yarn-lock.json to the working directory
COPY package.json .
COPY yarn.lock .

# Install npm dependencies
RUN yarn install --legacy-peer-deps

# Install gulp globally
RUN yarn global add gulp-cli gulp

COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["gulp"]
