FROM node:14 AS build

COPY . /vitepress-demo
WORKDIR /vitepress-demo
RUN npm install && npm run build

# This results in a single layer image
FROM nginx
COPY --from=build /vitepress-demo/.vitepress/dist /vitepress-demo
COPY nginx/nginx.conf /etc/nginx/conf.d
WORKDIR /vitepress-demo
