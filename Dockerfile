FROM node:18-alpine
WORKDIR /app
COPY front /app/front
RUN cd front && npm install && npm run build

COPY nest /app/nest
RUN cd nest && npm install && npm run build

CMD ["node", "nest/dist/main.js" ]
