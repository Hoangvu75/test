# Use a Node.js version that is compatible with NestJS
FROM node:20

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock files
COPY package.json yarn.lock ./

# Install dependencies using yarn
RUN yarn install

# Copy the rest of the application code
COPY . .

# Start the microservice
CMD ["yarn", "start:prod"]
