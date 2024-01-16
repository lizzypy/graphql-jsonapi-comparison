################# RAILS APP ################################
FROM ruby:3.2.2 AS backend-app

RUN apt-get update && apt-get install -y postgresql-client

RUN apt-get install -y nodejs

RUN apt-get install -y npm

WORKDIR /usr/src/app

COPY . .

RUN cd frontend && npm install
RUN cd frontend && npm run build

WORKDIR /usr/src/app

RUN bundle install

EXPOSE 3000
CMD ["./start.sh"]
