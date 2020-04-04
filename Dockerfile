FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Copy .npmrc for private packages
COPY .npmrc .npmrc

ARG FONTAWESOME_TOKEN
ENV FONTAWESOME_TOKEN=$FONTAWESOME_TOKEN

# Install packages
RUN npm ci && \
    rm -f .npmrc

# Bundle app source
COPY . .

# Install PM2
RUN npm install pm2 -g

# Expose express port
EXPOSE 8080

CMD [ "npm", "run", "build-and-ssr" ]
