/* dependencies */
var express = require('express');

/* environment variables */
var CONFIG_PORT = parseInt((process.env.CONFIG_PORT || 3000), 10);
if (isNaN(CONFIG_PORT)) {
  console.log('invalid port:', CONFIG_PORT);
  process.exit(1);
}

/* express configuration */
var app = express();

/* express middleware */
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', req.get('origin'));
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

/* express routing */
app.get('/', function (req, res, next) {
  res
    .status(200)
    .json({meta: {success: true, timestamp: Date.now()}, status: 'happy'});
});

/* express invocation */
app.listen(CONFIG_PORT, function () {
  console.log([
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~',
    'cors-sandbox running',
    ' => http://localhost:' + CONFIG_PORT,
    ' => [ ctrl + c ] to quit',
    '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'
  ].join('\n'));
});
