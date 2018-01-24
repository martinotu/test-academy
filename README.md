# Framework
This is intended to be a basic automation project that integrates [Cucumber-JS](https://github.com/cucumber/cucumber-js), [WebdriverIO](https://github.com/webdriverio/webdriverio) and [Allure report](http://allure.qatools.ru/) with a basic page object model.

## Requirements
* Nodejs >=8 to run tests on your machine
* Docker with node:8  `docker pull node:8`

## Setup
* Clone the repo
* To run tests on your machine: `yarn install` or `npm install`
* To run tests inside a docker: `docker run -v $(PWD):/test -w /test node:8 yarn install`


## Settings
Before you run any test, have a look at the `conf` folder. It contains a `master.conf.js` file with many settings option that you may want to adjust. The `local.conf.js` overrides some properties to run the tests on the local computer while the `ci.conf.js` is meant to run the tests against a remote selenium grid. In that case, do not forget to set `host` parameter to point to the right hostname/ip.

## How to run the test 
Run all features on your machine
```sh
yarn test:local
```

Run all feature inside Docker pointing to a selenium grid
```sh
docker run -v $(PWD):/test -w /test node:8 yarn test:ci
```

## Running a single feature
Sometimes it's useful to execute only a single feature file (expecially when you are debugging) and in that case run:

```sh
yarn test:local --spec src/features/login.feature
```

## How to write a new test
Tests are written in [Gherkin syntax](https://cucumber.io/docs/reference) and all features files (tests) are located in `./src/features/*`. You will already find some examples that demonstrate how use this framework.

Generally, to create a new test you have to:
1. Create a new feature file and describe the scenario(s) you want to test.
2. Implement the specified steps in an existing or new steps file inside the `src/steps` folder (glue code). 
3. If necessary, create a new page object model or update an existing one inside the `src/model` folder.

Now you are ready to run and debug your new feature's scenario(s). Easy, right?

## Notes
* To start your own selenium grid you could use [zalenium](https://github.com/zalando/zalenium) + selenium dockers:
```sh
docker pull elgalu/selenium
docker pull dosel/zalenium
```

you can start it with docker-compose
```sh
docker-compose up
```
and to stop, type:
```sh
docker-compose down
```

or run it with the following docker command: 
```sh
docker run --rm -ti --name zalenium -p 4444:4444 -p 5555:5555 \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v /tmp/videos:/home/seluser/videos \
    dosel/zalenium start
````