const AFPlay = require('afplay');
const { pathToFile } = require('../utils');
const player = new AFPlay();

async function playSound(sound) {
  const soundPath = await pathToFile(sound);
  player.play(soundPath);
}

module.exports = playSound;
