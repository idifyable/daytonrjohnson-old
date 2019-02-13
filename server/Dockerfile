FROM node:10-alpine

# Set NODE_ENV to either development or production.
# Default to production and have compose override to development on build/run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Default to port 3000 for node web server. Expose 9229 for debug
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

# Install Dockerized, used for database readiness listening
RUN apk add --no-cache openssl
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# Update to latest npm
RUN npm i npm@latest -g

# Install dependencies first
WORKDIR /opt
COPY package.json package-lock.json* ./
RUN npm install --no-optional && npm cache clean --force
ENV PATH /opt/node_modules/.bin:$PATH

# Copy in our source code last, as it changes the most
WORKDIR /opt/app
COPY ./src /opt/app

USER node
EXPOSE 80

ENTRYPOINT [ "dockerize" ]
CMD ["-wait", "tcp://postgres:5432", "node", "./bin/www"]