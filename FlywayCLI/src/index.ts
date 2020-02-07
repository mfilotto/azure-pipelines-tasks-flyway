import tasks = require('azure-pipelines-task-lib/task');
import trm = require('azure-pipelines-task-lib/toolrunner');

async function run() {
    try {
        let tool: trm.ToolRunner;

        const command = tasks.getInput('command', true);
        const workingDirectory = tasks.getPathInput('workingDirectory', true);
        const dbUrl = tasks.getInput('url', true);
        const dbUser = tasks.getInput('user', false);
        const dbPassword = tasks.getInput('password', false);
        const commandOptions = tasks.getInput('commandOptions', false);

        console.log("Flyway command: " + command);
        console.log("Working directory: " + workingDirectory);
        console.log("Database jdbc url: " + dbUrl);
        console.log("Database jdbc user: " + dbUser);
        console.log("Command options: " + commandOptions);

        let cmdPath = tasks.which("flyway", true);
        console.log('Flyway found at path: ' + cmdPath);
        let args: string[] = [];
        args.push('-n');
        args.push('-color=always');
        args.push('-locations=filesystem:'+workingDirectory);
        args.push('-url='+dbUrl);
        if (dbUser) {
            args.push('-user='+dbUser);
        }
        if (dbPassword) {
            args.push('-password='+dbPassword);
        }
        if (commandOptions) {
            args.push(commandOptions);
        }        
        args.push(command);        
        tool = tasks.tool(cmdPath)
                    .arg(args);

        await tool.exec();
        tasks.setResult(tasks.TaskResult.Succeeded, "");
    }
    catch (err) {
        tasks.setResult(tasks.TaskResult.Failed, err.message);
    }
}

run();