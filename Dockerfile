# Use the official Node.js 14 image
FROM node:14

# Set the working directory for the backend
WORKDIR /app

# Copy the backend package files
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the backend port (adjust for your API port)
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]
