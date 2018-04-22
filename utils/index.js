const path = require('path');
const fs = require('fs');

const getFileNamesFromDir = (dirPath, dirName) => {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, contents) => {
      if (err) return reject(err);
      resolve(contents);
    });
  });
}

module.exports.pathToFile = (requestedSound) => {
  return new Promise((resolve, reject) => {
    try {
      resolve(path.resolve(`sounds${requestedSound}.mp3`));
    } catch (e) {
      reject(e);
    }
  });
};

module.exports.listDirectory = (subdir = '') => {
  return getFileNamesFromDir(path.resolve(`sounds${subdir}`));
}

/**
 * Lists all sounds in the /sounds directory
 * @return {Array<Object>} An array of objects with keys representing the sub-directory in /sounds and a value of
 * the array of all the files in that sub-directory
 */
module.exports.getAllSounds = () => {
  return new Promise((resolve, reject) => {
    fs.readdir(path.resolve('sounds'), (err, dirs) => {
      if (err) return reject(err);
      const listActions = dirs.map(dir => getFileNamesFromDir(path.resolve(`sounds/${dir}`), dir))
      Promise.all(listActions)
        .then((files) => resolve(files))
        .catch(err => reject(err));
    })
  })
}
