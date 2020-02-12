#!/bin/bash
cf push "${CF_APP}"


EXIT=$?
if [ $EXIT -eq 0 ]; then STATUS=pass; else STATUS=fail; fi;


ibmcloud plugin install -f doi
ibmcloud login --apikey $API_KEY --no-region
ibmcloud doi publishdeployrecord --logicalappname="odr-mean-demo" --buildnumber="$BUILD_NUMBER" --env="prod" --status=$STATUS


exit $EXIT