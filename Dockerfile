FROM node:14 AS build

COPY . /web-blog
WORKDIR /web-blog
RUN npm install && npm run build

# This results in a single layer image
FROM nginx
COPY --from=build /web-blog/.vitepress/dist /web-blog
COPY nginx/nginx.conf /etc/nginx/conf.d
WORKDIR /web-blog
