FROM node:20-slim

WORKDIR "/server"

COPY ./package.json ./
RUN npm install --omit=dev

COPY ./app ./app
COPY ./data ./data

CMD ["node", "./app/server.js"]
