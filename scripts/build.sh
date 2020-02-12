#!/bin/bash
# Installs the version of node that your application needs
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
  
ibmcloud plugin install -f doi
ibmcloud login --apikey $API_KEY --no-region

# Installs app dependencies, and completes a production build
npm install -g @angular/cli
npm install

ng build --prod

ibmcloud doi publishbuildrecord --logicalappname="odr-mean-demo" --buildnumber="$MY_BUILD_NUMBER" --branch="$GIT_BRANCH" --repositoryurl="$GIT_URL" --commitid="$GIT_COMMIT" --status=pass