FROM node:12.2.0-alpine
EXPOSE 80
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install and cache app dependencies
COPY package.json /app/package.json
COPY build/index.html public/index.html
RUN yarn install
RUN yarn add react-scripts -g
# start app
CMD ["yarn", "start"]