FROM node:latest
RUN npm install nodemon
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "npm", "run", "dev" ]