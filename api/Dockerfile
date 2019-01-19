FROM node:8

# disable strict-ssl in order to avoid error with self-signed certificates
RUN npm config set strict-ssl false

ADD package-lock.json /package-lock.json
ADD package.json /package.json

ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm install 

WORKDIR /app
ADD . /app

EXPOSE 7500

ENTRYPOINT ["/bin/bash", "/app/run.sh"]
CMD ["start"]