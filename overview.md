# Flyway Tasks for Azure DevOps

## Compatible with Linux Build Agents

The tasks can execute on all supported build agent operating systems **including Ubuntu and MacOS**.

## Separate Task for Flyway Installation

The dedicated `Flyway Installer` task allows for complete control over how frequently and on which agents flyway is installed. This prevents from having to install flyway before executing each flyway task. However, if necessary, this can be installed multiple times to support pipelines that span multiple build agents