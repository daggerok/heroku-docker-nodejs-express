heroku-docker-nodejs-express [![build](https://travis-ci.org/daggerok/heroku-docker-nodejs-express.svg?branch=master)](https://travis-ci.org/daggerok/heroku-docker-nodejs-express)
============================

### code app

require npm scripts start in package.json

## Herokally

```fish
heroku plugins:install heroku-container-registry
heroku login
heroku container:login
heroku create daggerok
heroku container:init --image mhart/alpine-node
cat docker-compose.yml # check working_dir
vim Dockerfile
heroku container:push web --app daggerok
heroku open  --app daggerok # or open https://daggerok.herokuapp.com
```
**important**

required `CMD` in `Dockerfile`
`EXPOSE` is not supported. use `$PORT` heroku env. variable (see docker-compose.yml), means that in your nodejs app should use `process.env.PORT`

## locally

### build

```fish
docker build -t daggerok/heroku-docker-nodejs-express .
```

### run

```fish
docker run -it -p 8080:8080 --rm --name heroku-docker-nodejs-express daggerok/heroku-docker-nodejs-express
```

### clean

```fish
docker rmi daggerok/heroku-docker-nodejs-express
```
