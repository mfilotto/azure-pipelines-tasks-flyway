## To test locally
```
cd FlywayInstaller
source .env-sample
mkdir -p /tmp/_test-agent/{temp,tools}
npm run build
npm run pack
npm run start
export PATH=/tmp/_test-agent/tools/flyway/6.2.0/x64:$PATH

cd FlywayCLI/
source .env-sample
npm run start
npm run build
npm run pack
npm run start
```
