FROM node:18-alpine

WORKDIR ./

COPY ["package.json", "yarn.lock", ".env.*", "./"]

RUN yarn build

EXPOSE 8081

ENTRYPOINT ["node", "./index.html"]
