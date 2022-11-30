FROM node

WORKDIR /frontend

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm i --force

CMD npm start