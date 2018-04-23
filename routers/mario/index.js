const mario = require('express').Router();
const playSound = require('../../player');
const { listDirectory } = require('../../utils');

mario.get('/', function(req, res) {
  listDirectory(req.originalUrl)
    .then((contents) => res.json(contents))
    .catch(err => res.sendStatus(err));
})

mario.use(function(req, res, next) {
  return playSound(req.originalUrl)
    .then(() => res.send('Sound played!'))
    .catch(e => res.sendStatus(400));
});

module.exports = mario;
