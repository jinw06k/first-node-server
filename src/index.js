require('dotenv').config();
const express = require('express');
const config = {
  port: process.env.APP_PORT || 80,
};

const app = express();
app.use(express.static(__dirname + '/static'));
app.listen(config.port, () => console.log(`listening on ${config.port} ...`));
