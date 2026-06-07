# Use Node 22 (LTS)
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install dependencies (only copy package files first for better caching)
COPY package.json package-lock.json* ./
RUN npm ci

# Copy all source files
COPY . .

# Build the app (explicitly clean dist)
RUN npm run build

# Expose the API port
EXPOSE 3001

# Start the server (with migration check)
CMD ["npm", "start"]
