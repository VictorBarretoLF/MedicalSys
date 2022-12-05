FROM node

WORKDIR /frontend

COPY src ./src
COPY public ./public
COPY package-lock.json .
COPY package.json .

RUN npm i --force

CMD npm start