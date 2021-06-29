#!/bin/bash
set -e

echo "Install dependencis"

npm set //registry-lpm.listenai.com/:username=${LPM_USERNAME}
npm set //registry-lpm.listenai.com/:_password=${LPM_PASSWORD_BASE64}
npm set //registry-lpm.listenai.com/:email=${LPM_EMAIL}
npm set //registry-lpm.listenai.com/:always-auth=true

npm install --registry=${LPM_REGISTRY}
npm run build

source ./ci/variables.sh

echo "Publishing to LPM..."
npm publish
