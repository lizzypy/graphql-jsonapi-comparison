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
