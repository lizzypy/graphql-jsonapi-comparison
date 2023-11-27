# Stage 1: Build Node.js frontend
#FROM node:20 AS frontend-builder
#
#WORKDIR /app
#
## Copy package.json and package-lock.json first to leverage Docker cache
#COPY package*.json ./
#RUN npm install
#
## Copy the rest of the application code
#COPY . .
#
## Build the frontend
#RUN npm run build

FROM ruby:3.2.2

RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /usr/src/app
COPY . .

RUN bundle install

EXPOSE 4000
CMD ["./start.sh"]
