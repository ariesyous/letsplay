# Use the official Node.js 14 image as the base
FROM node:14

# Set the working directory
WORKDIR /client

# Copy package.json and package-lock.json for the frontend
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend source code
COPY . .

# Expose the port React uses (default: 3000)
EXPOSE 3000

# Start the React app in development mode
CMD ["npm", "start"]
