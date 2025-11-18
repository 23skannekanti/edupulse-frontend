FROM node:20-bookworm

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package files and install dependencies
COPY package.json package-lock.json pnpm-lock.yaml ./
RUN pnpm install

# Copy source code
COPY . .

# Create writable `.next` directory BEFORE switching users
RUN mkdir -p /app/.next && chmod -R 777 /app/.next

# (Optional) if you really want non-root, switch AFTER fixing permissions
# USER node

EXPOSE 3000

CMD ["pnpm", "dev"]