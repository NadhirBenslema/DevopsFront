# Use an official Node runtime as the base image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./



# Install application dependencies
RUN npm install -f

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a smaller image for serving the application
FROM nginx:alpine

# Copy the built app from the 'build' stage
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 4200

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
