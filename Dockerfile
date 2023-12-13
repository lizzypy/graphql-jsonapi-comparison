################# NODE BUILDER ################################
# Stage 1: Build Node.js frontend
FROM node:21 AS frontend-builder

WORKDIR /usr/src/app

COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .

RUN npm install

# Copy the rest of the application code
COPY ./frontend .

# Build the frontend
RUN npm run build

CMD ["npm","start"]


################# RAILS APP ################################
FROM ruby:3.2.2 AS backend-app

RUN apt-get update && apt-get install -y postgresql-client

WORKDIR /usr/src/app

COPY Gemfile .
COPY Gemfile.lock .

RUN bundle install

COPY . .

EXPOSE 3000
CMD ["./start.sh"]
