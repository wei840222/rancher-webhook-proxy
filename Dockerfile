FROM node:10

WORKDIR /app
COPY . /app
RUN yarn

ENTRYPOINT [ "yarn", "start" ]