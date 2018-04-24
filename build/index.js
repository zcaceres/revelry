const fs = require('fs');
const { listDirectory } = require('../utils');
const playSound = require('../player');

function listFiles(req, res, next) {
  listDirectory(req.originalUrl)
    .then((contents) => res.json(contents))
    .catch(err => res.sendStatus(err));
}

function urlToSound(req, res, next) {
  return playSound(req.originalUrl)
    .then(() => res.send('Sound played'))
    .catch(e => res.sendStatus(400));
}

// get all directories from sounds folder
  // register list files handler / GET
  // register handler for soundPlayer
  //

module.exports = {
  listFiles,
  urlToSound
}
