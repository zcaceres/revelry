const fs = require('fs');
const express = require('express');
const { listDirectory } = require('../utils');
const playSound = require('../player');

/**
 * Send a list of all files in the directory
 * requested in the url of the REQ object.
 * @param  {[type]}   req  Express REQ object
 * @param  {[type]}   res  Express RES object
 * @return {undefined}
 */
async function sendFileList(req, res, next) {
  try {
    const contents = await listDirectory('sounds' + req.originalUrl);
    res.json(contents);
  } catch (e) {
    res.sendStatus(err);
  }
}

/**
 * Plays a sound based on the requested URL
 * @param  {[type]}   req  Express REQ object
 * @param  {[type]}   res  Express RES object
 * @return {undefined}
 */
async function urlToSound(req, res) {
  try {
    console.log(req);
    const requestedFile = req.originalUrl;
    await playSound(requestedFile);
    const contents = await listDirectory('sounds' + req.baseUrl);
    res.json(contents);
  } catch (e) {
    console.log(e)
    res.sendStatus(400);
  }
}

function getSoundDirectories() {
  return listDirectory('sounds')
}

/**
 * Creates a router for a given directory.
 * 1. Get to root of that directory lists all files.
 * 2. A request to /directory/filename plays the relevant sound
 * @param  {String} dirname directory name
 * @return {Object}         Express Router middleware
 */
function routerFactory(dirname) {
  const router = express.Router();
  router.get('/', sendFileList)
  router.use(urlToSound);
  return router;
}

/**
 * Loop through all directories in the sounds directory
 * and generate a Router() middleware for all requests to
 * and endpoint with that directory's name.
 * @param  {Object} app Express app object
 * @return {Object}     Express app object with middleware added
 */
async function generateRouters(app) {
  const dirNames = await getSoundDirectories();
  dirNames.forEach(dirName => {
    app.use(`/${dirName}`, routerFactory(dirName));
  });
  return app;
}

module.exports = generateRouters;
