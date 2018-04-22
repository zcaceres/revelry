const music = require('express').Router();
const playSound = require('../../player');
const { listDirectory } = require('../../utils');

music.get('/', function(req, res, next) {
  listDirectory(req.originalUrl)
    .then((contents) => res.json(contents))
    .catch(err => res.sendStatus(err));
});

music.use(function(req, res, next) {
  return playSound(req.originalUrl)
    .then(() => res.sendStatus('Sound played'))
    .catch(e => res.sendStatus(400));
});

module.exports = music;
