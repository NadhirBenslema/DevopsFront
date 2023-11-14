# Stage 1: Build Stage
FROM node:18 as build

WORKDIR /app

COPY package*.json ./

RUN npm install -f

COPY . .

# Make sure the build output goes to /app/dist
RUN npm run build --output-path=dist

# Stage 2: Final Stage
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# Copy the built app from the 'build' stage
COPY --from=build /app/dist/DevopsFront .

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
