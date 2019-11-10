FROM node:alpine

WORKDIR /app
COPY . .

RUN npm install

ENTRYPOINT ["/bin/sh"]
CMD ["run_test.sh"]
