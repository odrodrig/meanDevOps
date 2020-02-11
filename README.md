# SupplyStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Lint

Run `ng lint` to scan the project for code quality mistakes and common coding errors.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Scripts

This repo contains 3 scripts in the `/scripts` directory to help build, test, and deploy the project. These scripts can be called in the CI/CD pipeline to deploy the application.

- build.sh: This script pulls in the NPM dependencies and then compiles the project using Webpack. The output is contained in the `/dist` directory.
- test.sh: This script does a combination of linting, unit testing, and e2e testing using tslint, karma + Jasmine, and Protractor.
- deploy.sh: This script just deploys to cloud foundry. It is meant to be consumed by the IBM Continuous Delivery pipelines service on IBM Cloud.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
