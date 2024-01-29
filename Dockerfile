#stage 1: compile and build angular codebase
FROM node:latest as build

#set the working directory
WORKDIR /usr/local/app

#add the source code to the app
COPY ./ /usr/local/app/

#install all dependancies
RUN npm install

#generate the build of the application
RUN npm run build


#stage 2: serve app with nginx server
FROM nginx:latest

#copy the build output to replace the default nginx contents
COPY --from=build /usr/local/app/dist/simple-webpage /usr/share/nginx/html

#expose at the 80
EXPOSE 80