FROM node:10.12.0

WORKDIR /app

COPY package.json .
RUN npm install

COPY src/ src/

ENV APP_PORT=80
CMD [ "node", "./src/index.js" ]
