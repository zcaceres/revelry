const music = require('express').Router();
const { listFiles, urlToSound } = require('../../build');

music.get('/', listFiles);

music.use(urlToSound);

module.exports = music;
