# Stage 1: Build the Angular project
FROM node:20.14.0 AS build
 
# Set the working directory
WORKDIR /app
 
# Copy package.json and package-lock.json
COPY package*.json ./
 
# Install dependencies
RUN npm install
 
# Install Angular CLI globally
RUN npm install -g @angular/cli
 
# Copy the rest of the application source code
COPY . .
 
# Build the Angular application in production mode
RUN ng build --configuration=production
 
# Stage 2: Serve the Angular project with Nginx
FROM nginx:latest
 
# Copy the built files from the build stage
COPY --from=build /app/dist/admin/browser /usr/share/nginx/html
 
# Expose port 80
EXPOSE 80
 
# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
