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

Have [node](https://nodejs.org/en/), [npm](https://www.npmjs.com/) or [yarn](https://www.npmjs.com) installed on your development machine.

Install dependencies with

```bash
npm install
# or
yarn install
```

After which you can run the application with either:

```bash
npm run start
# or
yarn start
```

> Will start up the application on this [address](http://localhost:3000)

## Tests

Tests can be found in the [__tests__](./__tests__) directory and can be run with:

```bash
yarn test
# or
npm run test
```

Generating a coverage report can be done with:

```bash
npm run test:cover
# or
yarn test:cover
```

## Deployment

First create an optimized production build with:

```bash
npm run build
# or
yarn build
```

> This will have the production build in the [build](./build) folder

To serve locally, you can use:

```bash
npm run serve
# or
yarn serve
```

You can now deploy the build to any static server ([surge](https://surge.sh/), [netlify](https://www.netlify.com/), etc).

[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-js.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-html.svg)](https://forthebadge.com)