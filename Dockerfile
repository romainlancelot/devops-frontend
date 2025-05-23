FROM node:22.11-alpine3.20 AS build

WORKDIR /app
COPY package-lock.json .
COPY package.json .
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:mainline-alpine3.20-slim

COPY --from=build /app/dist /usr/share/nginx/html
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
