FROM node:18-alpine

WORKDIR /opt/app

RUN npm install -g nodemon

COPY docker/entrypoint.sh docker/entrypoint.sh

RUN chmod +x docker/entrypoint.sh

ENTRYPOINT ["docker/entrypoint.sh"]

CMD ["npm", "start"]
