#!/bin/bash
export NVM_DIR=/home/pipeline/nvm
export NODE_VERSION=12.14.0
export NVM_VERSION=0.29.0

npm config delete prefix \
  && curl https://raw.githubusercontent.com/creationix/nvm/v${NVM_VERSION}/install.sh | sh \
  && . $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default \
  && node -v \
  && npm -v

sudo apt-get update
sudo apt-get -qq install libxss1 libappindicator1 libindicator7 -y > /dev/null
wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt -qq install ./google-chrome*.deb -y > /dev/null

# Installs app dependencies, and completes a production build
npm install -g @angular/cli
npm install
ibmcloud plugin install -f doi
ibmcloud login --apikey $API_KEY --no-region

echo "Starting linting with tslint"
ng lint

echo "Starting unit tests with Karma + Jasmine"
ng test --no-watch --no-progress --browsers=ChromeHeadlessCI --code-coverage

echo "Starting end-to-end testing with Protractor"
ng e2e --protractor-config=e2e/protractor-ci.conf.js

ibmcloud doi publishtestrecord --filelocation='/coverage/supply-store/' --type='code' --logicalappname="odr-mean-demo" --buildnumber="$BUILD_NUMBER"
