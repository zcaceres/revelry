const express = require('express');
const app = express();
const playSound = require('./player');

app.get('/', function(req, res) {
  res.json({});
});

app.use(function(req, res, next) {
  const routeName = req.url.replace('/', '');
  playSound(routeName);
  res.send(200);
});

// app.get('/gangsta', function (req, res) {
//   res.send(200);
//   playSound('gangsta');
// })
//
// app.get('/careless', function (req, res) {
//   res.send(200);
//   playSound('careless');
// });

app.listen(3000, () => console.log('Example app listening on port 3000!'))
