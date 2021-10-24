FROM node 

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 50001

CMD ["npm","start"]