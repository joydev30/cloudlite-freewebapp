# build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY frontend ./frontend
WORKDIR /app/frontend
RUN npm install
RUN npm run build

# runtime stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/frontend/build ./frontend/build
COPY package*.json ./
RUN npm install --production
COPY server.js ./
EXPOSE 3000
CMD ["node", "server.js"]
