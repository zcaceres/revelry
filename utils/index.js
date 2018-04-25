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

module.exports.listDirectory = (targetDir = '') => {
  return getFileNamesFromDir(path.resolve(targetDir));
}
