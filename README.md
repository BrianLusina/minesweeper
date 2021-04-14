# Minesweeper

[![Build Status](https://travis-ci.org/BrianLusina/minesweeper.svg?branch=master)](https://travis-ci.org/BrianLusina/minesweeper)
[![codecov](https://codecov.io/gh/BrianLusina/minesweeper/branch/master/graph/badge.svg)](https://codecov.io/gh/BrianLusina/minesweeper)

A simple classic minesweeper game built in [ReactJS](https://reactjs.org/).

Rules of the game:

1. The goal of the game is to find all the mines on the board.
2. You reveal mines by clicking the cells, if you reveal a mine you loose.
3. If you reveal a cell without mine it will show number of mines surrounding the cell.
4. You can flag a field by right clicking it.
5. You win the game if you are able to reveal all the cells that is not a mine or you have flagged all the cells that is a mine.

## Pre-requisites

1. [Node](https://nodejs.org/en/), [npm](https://www.npmjs.com/) or [yarn](https://www.npmjs.com)

   Have these installed on your development machine

2. [Docker](https://www.docker.com/)

   Used to package the application in a container and allow it to run as a microservice

3. [Kubectl](https://kubernetes.io/docs/tasks/tools/)

   Allows interacting with the kubernetes API from your development machine

4. [Minikube](https://minikube.sigs.k8s.io/docs/start/)
   Allows creating and setting up a Kubernetes Cluster on your development machine

5. [Hadolint](https://github.com/hadolint/hadolint)

   Used to lint Dockerfiles. Or, you can set this up by running:

   ```bash
   make setup-hadolint
   ```

   > This will install hadolint to the [bin](./bin) directory

## Setup Environment

You can setup the environment by running:

```bash
npm install
# or
yarn install
# or
make install
```

These will install the dependencies.

After which you can run the application with:

```bash
npm run start
# or
yarn start
# or
make start
```

> Will start up the application on this [address](http://localhost:3000)

## Tests

Tests can be found in the [__tests__](./__tests__) directory and can be run with:

```bash
yarn test
# or
npm run test
# or
make test
```

Generating a coverage report can be done with:

```bash
npm run test:coverage
# or
yarn test:coverage
# or 
make test-cover
```

## Deployment

First create an optimized production build with:

```bash
npm run build
# or
yarn build
# or
make build
```

> This will have the production build in the [build](./build) folder

To serve locally, you can use:

```bash
npm run serve
# or
yarn serve
```

You can now deploy the build to any static server ([surge](https://surge.sh/), [netlify](https://www.netlify.com/), etc).

## Built With

* [TypeScript](https://www.typescriptlang.org/) - Programming language used
* [ReactJS](https://reactjs.org/) - Frontend framework
* [NPM](https://www.npmjs.com/) - Dependency management

## Contributing

Please read [CONTRIBUTING.md](.github/CONTRIBUTING.md) for details on our code of conduct, and the process for
submitting pull requests to us. Also read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details on our code of conduct.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see
the [tags on this repository](https://github.com/BrianLusina/minsweeper/releases).

## Authors

* **Brian Lusina** - *Initial work* - [BrianLusina](https://github.com/BrianLusina)

See also the list of [contributors](https://github.com/BrianLusina/minesweeper/graphs/contributors) who participated in this
project.

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)