FROM node:18-alpine

WORKDIR /home/app

RUN apk --update --upgrade --no-cache add bash cairo-dev make pango-dev gdk-pixbuf curl && \
  ln -s /usr/bin/python3 /usr/bin/python

COPY package.json ./

RUN apk add --no-cache --virtual .build-deps gcc g++ python3-dev musl-dev jpeg-dev zlib-dev libffi-dev && \
  npm install && \
  apk del .build-deps

COPY . .

CMD ["./bin/api"]
