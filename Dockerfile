FROM node:lts-alpine

WORKDIR /app

COPY package.json /app/

RUN npm install

COPY . /app/

RUN npm run build

FROM nginx:1.21.6-alpine

COPY --from=0 /app/build /usr/share/nginx/html