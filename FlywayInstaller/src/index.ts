import tasks = require('vsts-task-lib/task');
import * as installer from './installer'
import * as tools from 'vsts-task-tool-lib/tool';
import * as path from 'path';
import * as os from 'os';
const isWindows = os.type().match(/^Win/);

async function configureFlyway(){
    var inputVersion = tasks.getInput("flywayVersion", true);
    var flywayPath = await installer.download(inputVersion);
    var envPath = process.env['PATH'];
    if(envPath && !envPath.startsWith(path.dirname(flywayPath))){
        tools.prependPath(path.dirname(flywayPath));
    }
}

async function verifyFlyway(){
    console.log("Verifying Flyway installation. Executing 'flyway version'");
    var flywayToolPath = tasks.which("flyway", true);
    var flywayTool = tasks.tool(flywayToolPath);
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