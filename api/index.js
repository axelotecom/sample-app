const express = require('express');

const app = express();
app.use(express.json());

app.get('/test', async (req, res) => {
  res.status(200).json({status: 'OK'})
});

module.exports = app
