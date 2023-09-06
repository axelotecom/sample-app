FROM node:18-alpine
COPY . .
RUN npm i
RUN npm run build
EXPOSE 3001
CMD [ "npm", "run", "serve" ]
