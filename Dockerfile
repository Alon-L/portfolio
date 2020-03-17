FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package.json package.json

# Copy .npmrc for private packages
COPY .npmrc .npmrc

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Delete .npmrc when finished
RUN rm -f .npmrc

# Bundle app source
COPY . .

# Install PM2
RUN npm install pm2 -g

EXPOSE 8080

CMD [ "npm", "run", "build-and-ssr" ]