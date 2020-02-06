import tasks = require('azure-pipelines-task-lib/task');
import * as installer from './installer'
import * as tools from 'azure-pipelines-tool-lib/tool';
import * as path from 'path';
import * as os from 'os';
const isWindows = os.type().match(/^Win/);

async function configureFlyway(){
    const inputVersion: string = <string>tasks.getInput("flywayVersion", true);
    let flywayPath: string = await installer.download(inputVersion);
    let envPath = process.env['PATH'];
    if(envPath && !envPath.startsWith(path.dirname(flywayPath))){
        tools.prependPath(path.dirname(flywayPath));
    }
}

async function verifyFlyway(){
    console.log("Verifying Flyway installation. Executing 'flyway -v'");
    let flywayToolPath = tasks.which("flyway", true);
    let flywayTool = tasks.tool(flywayToolPath);
    flywayTool.arg("-v");
    return flywayTool.exec()
}

configureFlyway()
    .then(() => verifyFlyway())
    .then(() => {
        tasks.setResult(tasks.TaskResult.Succeeded, "");
    })
    .catch((error) => {
        tasks.setResult(tasks.TaskResult.Failed, error)
    })