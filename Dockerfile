# Stage 1: Build Node.js frontend
FROM node:20 AS frontend-builder

WORKDIR /usr/src/app

# Copy the rest of the application code
COPY ./frontend .

RUN npm install

# Build the frontend
RUN npm run build

FROM ruby:3.2.2

RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /usr/src/app

COPY . .

RUN bundle install

EXPOSE 4000
CMD ["./start.sh"]
