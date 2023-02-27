FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

RUN npm install -g prisma

COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
