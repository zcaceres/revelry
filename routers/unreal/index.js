const unreal = require('express').Router();
const playSound = require('../../player');
const { listDirectory } = require('../../utils');

unreal.get('/', function(req, res) {
  listDirectory(req.originalUrl)
    .then((contents) => res.json(contents))
    .catch(err => res.sendStatus(err));
})

unreal.use(function(req, res, next) {
  return playSound(req.originalUrl)
    .then(() => res.send('Sound played!'))
    .catch(e => res.sendStatus(400));
});

module.exports = unreal;
