# Flyway Tasks for Azure DevOps

The tasks in this extension allow for running flyway cli commands from both the Build and Release pipelines in Azure DevOps.
An installer is also provided. 

## Flyway Official Definition
> Flyway is an open-source database migration tool. It strongly favors simplicity and convention over configuration.
> It is based around just 7 basic commands: Migrate, Clean, Info, Validate, Undo, Baseline and Repair.
> Migrations can be written in SQL (database-specific syntax (such as PL/SQL, T-SQL, ...) is supported) or Java (for advanced data transformations or dealing with LOBs).

## Flyway Official Documentation

https://flywaydb.org/documentation/

## Supported Databases

Flyway ships with JDBC drivers for the following databases by default:

- Aurora MySQL
- Aurora PostgreSQL
- CockroachDB
- Derby
- Firebird
- H2
- HSQLDB
- MariaDB
- MySQL
- Percona XtraDB
- PostgreSQL
- SQLite
- SQL Server
- Sybase ASE

## Supported Commands

The Terraform CLI task supports executing the following commands

- migrate
- clean
- info
- validate
- baseline
- repair

## Compatible with Linux and Windows Build Agents

The tasks can execute on windows and linux build agent operating systems **including Ubuntu and Windows**.

## Separate Task for Flyway Installation

The dedicated `Flyway Installer` task allows for complete control over how frequently and on which agents flyway is installed.
This installer should be used before a CLI tasks.

## FlywayCLI configuration form

![FlywayCLI configuration form](https://raw.githubusercontent.com/mfilotto/azure-pipelines-tasks-flyway/master/screenshots/flyway-cli-taks-form.png)

- Command: first select the command you want to use, be sure to read Flyway official documentation first
  - [migrate](https://flywaydb.org/documentation/commandline/migrate): "Migrates the schema to the latest version. Flyway will create the schema history table automatically if it doesn’t exist."
  - [clean](https://flywaydb.org/documentation/commandline/clean): "Drops all objects (tables, views, procedures, triggers, …) in the configured schemas."
  - [info](https://flywaydb.org/documentation/commandline/info): "Prints the details and status information about all the migrations."
  - [validate](https://flywaydb.org/documentation/commandline/validate): "Validate applied migrations against resolved ones (on the filesystem or classpath) to detect accidental changes that may prevent the schema(s) from being recreated exactly."
  - undo: Not supported yet in FlywayCLI (Flyway Pro feature)
  - [baseline](https://flywaydb.org/documentation/commandline/baseline): "Baselines an existing database, excluding all migrations up to and including baselineVersion."
  - [repair](https://flywaydb.org/documentation/commandline/repair): "Repairs the Flyway schema history table."
- SQL scripts directory: directory to scan recursively for migrations scripts
- JDBC URL: the jdbc url to datatabse. Must respect standard format. These formats can be found on Flyway documentation. [Ex for SQL Server](https://flywaydb.org/documentation/database/sqlserver)
- Datatabse user
- Datatabse password
- Command Options: any option not listed above can be configure here. Have a look at Flyway documentation to know more about [available options](https://flywaydb.org/documentation/commandline/migrate#options)