FROM node:18-alpine

ENV PORT=3001
ENV PRODUCTION=true
ENV REACT_APP_API_HOST=""

COPY . .
RUN npm i
RUN npm run build

EXPOSE 3001
CMD [ "npm", "run", "prod" ]
