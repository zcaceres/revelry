const express = require('express');
const app = express();
const { listDirectory } = require('./utils');
const generateRouters = require('./build');

// Utility endpoint to see all the sub-directories in sounds directory.
app.get('/', function(req, res) {
  listDirectory('sounds')
    .then((contents) => res.json(contents))
    .catch(err => res.sendStatus(err));
});

/**
 * Generate routers for every sub-directory in 'sounds'
 */
generateRouters(app);

app.listen(3000, () => console.log('Listening :3000!'))
