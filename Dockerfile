FROM node:21

WORKDIR /home/Hyper/

COPY ./package.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]

EXPOSE 3000