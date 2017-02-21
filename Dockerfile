FROM node:4.2
MAINTAINER Rogier Slag <rogier@magnet.me>

RUN touch /opt/privateKey

RUN mkdir /app
ADD package.json /app
ADD index.js /app
RUN cd /app && npm install

WORKDIR /app
CMD ["node", "index.js"]
