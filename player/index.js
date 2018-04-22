const path = require('path');
const AFPlay = require('afplay');
const player = new AFPlay();

function playSound(name) {
  return player.play(path.resolve(`sounds/${name}.mp3`))
    .catch(err => console.error(err));
}

module.exports = playSound;
