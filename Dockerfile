FROM node:18 as build

WORKDIR /app

COPY package*.json ./



RUN npm install -f

COPY . .

RUN npm run build

# Use a smaller image for serving the application
FROM nginx:alpine

# Copy the built app from the 'build' stage
COPY --from=build /app/dist/devops-front /usr/share/nginx/html

EXPOSE 4200

CMD ["nginx", "-g", "daemon off;"]