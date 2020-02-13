## To test locally
```
cd FlywayInstaller
source .env-sample
mkdir -p /tmp/_test-agent/{temp,tools}
npm run build
npm run pack
npm run start
export PATH=/tmp/_test-agent/tools/flyway/$INPUT_FLYWAYVERSION/x64:$PATH

cd FlywayCLI/
source .env-sample
npm run build
npm run pack
npm run start
```
