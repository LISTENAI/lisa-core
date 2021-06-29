echo "${NPMRC}" > ~/.npmrc

echo "${NPMRC}"
echo "${LPM_REGISTRY}"

npm install --registry=${LPM_REGISTRY}
npm run build

npm publish --access public
