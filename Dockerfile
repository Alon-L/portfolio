# First build
FROM node:12 AS build

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json package.json

# License arguments
ARG FONTAWESOME_TOKEN

# Copy .npmrc for private packages
RUN echo -e "@fortawesome:registry=https://npm.fontawesome.com/\n//npm.fontawesome.com/:_authToken=$FONTAWESOME_TOKEN" > .npmrc && \
    npm install --production && \
    rm -f .npmrc

# Second build
FROM node:12

WORKDIR /usr/src/app

# Bundle app source
COPY . .
COPY --from=build /usr/src/app /usr/src/app

# Install PM2
RUN npm install pm2 -g

EXPOSE 8080

CMD [ "npm", "run", "build-and-ssr" ]