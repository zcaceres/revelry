const misc = require('express').Router();
const playSound = require('../../player');
const { listDirectory } = require('../../utils');

misc.get('/', function(req, res) {
  listDirectory(req.originalUrl)
    .then((contents) => res.json(contents))
    .catch(err => res.sendStatus(err));
})

misc.use(function(req, res, next) {
  return playSound(req.originalUrl)
    .then(() => res.send('Sound played!'))
    .catch(e => res.sendStatus(400));
});

module.exports = misc;
