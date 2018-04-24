const unreal = require('express').Router();
const { listFiles, urlToSound } = require('../../build');

unreal.get('/', listFiles);

unreal.use(urlToSound);

module.exports = unreal;
