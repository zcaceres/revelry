const AFPlay = require('afplay');
const { pathToFile } = require('../utils');
const player = new AFPlay();

function playSound(sound) {
  return pathToFile(sound)
    .then(soundPath => player.play(soundPath));
}

module.exports = playSound;
