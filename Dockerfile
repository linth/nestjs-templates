FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
CMD ["node", "dist/main.js"]

# ###################
# docker usage
# ###################
# $ docker build -t <container_name> .
# $ docker run -p 80:3000 -d <container_name>