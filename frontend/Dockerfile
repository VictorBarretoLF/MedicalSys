FROM node

WORKDIR /frontend

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN npm i

CMD npm start