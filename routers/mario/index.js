const mario = require('express').Router();
const { listFiles, urlToSound } = require('../../build');

mario.get('/', listFiles);

mario.use(urlToSound);

module.exports = mario;
