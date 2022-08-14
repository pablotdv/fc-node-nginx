FROM node:latest

WORKDIR /app

RUN apt-get update && \ 
    apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# COPY docker-entrypoint-dev.sh /docker-entrypoint-dev.sh
# RUN chmod a+x /docker-entrypoint-dev.sh

# RUN npm i -g nodemon

# CMD ["/docker-entrypoint-dev.sh"]