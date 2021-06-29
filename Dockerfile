FROM node:14

# Create app directory
RUN mkdir -p /usr/src/nodedockerapp
WORKDIR /usr/src/nodedockerapp

# Install dependencies
COPY package.json /usr/src/nodedockerapp
RUN npm install

# Push in app source
COPY . /usr/src/nodedockerapp


CMD [ "/bin/bash" ]