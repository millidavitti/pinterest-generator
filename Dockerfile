# Use the official Node.js image with Alpine
FROM node:20.18-alpine3.19

# Set the working directory
WORKDIR /home/pinterest-generator

# Copy package.json and pnpm-lock.yaml first for better caching
COPY package.json pnpm-lock.yaml ./

# Install pnpm globally
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN pnpm run build

# Expose the port for the app
EXPOSE 3000

# Specify the command to run the application
CMD ["pnpm", "start"]
 