#!/bin/bash
cf push "${CF_APP}"

# View logs
cf logs "${CF_APP}" --recent