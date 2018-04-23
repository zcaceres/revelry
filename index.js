const express = require('express');
const app = express();
const musicRouter = require('./routers/music');
const unrealRouter = require('./routers/unreal');
const { listDirectory } = require('./utils');

app.get('/', function(req, res) {
  listDirectory()
    .then((contents) => res.json(contents))
    .catch(err => res.sendStatus(err));
})

app.use('/music', musicRouter);
app.use('/unreal', unrealRouter);
app.use('/mario', marioRouter);
app.use('/misc', miscRouter);

app.listen(3000, () => console.log('Listening :3000!'))
