const misc = require('express').Router();
const { listFiles, urlToSound } = require('../../build');

misc.get('/', listFiles)

misc.use(urlToSound);

module.exports = misc;
