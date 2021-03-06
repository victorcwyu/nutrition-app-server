# Project Title

This server connects Vegtable's front-end interface to the local db

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

git clone

### Prerequisites

This project operates on the following dependencies:

- Postgres: [install postgres](https://www.postgresql.org/)
- Nodejs: [install node.js](https://nodejs.org/en/)

### Installing

Initialize database

```
CREATE ROLE vegtable WITH LOGIN password 'password'
CREATE DATABASE vegtable_development OWNER vegtable
```

run migrations (schema)
run seeds (default users, favorites, default data, etc.)

Example schema import:

```
psql \i db/schema/01_users.sql
```

Example seed import:

```
psql \i db/seeds/01_users.sql
```

install packages

```
npm install
```

## Usage

```
npm run start
```

## Development

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Deployment

```
<!-- git push heroku master -->
```

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- Steven Choi - [GitHub](https://github.com/stevencschoi)

See also the list of [contributors](https://github.com/stevencschoi/nutrition-app-server/contributors) who participated in this project.
