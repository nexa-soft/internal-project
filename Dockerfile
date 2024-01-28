#stage 1: compile and build angular codebase
FROM node:latest as build

WORKDIR /usr/local/app

COPY ./ /usr/local/app/

RUN npm install

RUN npm run build


#stage 2: serve app with nginx server
FROM nginx:latest

COPY --from=build /usr/local/app/dist/simple-webpage /usr/share/nginx/html

EXPOSE 80