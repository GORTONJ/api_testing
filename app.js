const express = require('express');
const app = express();

app.use(express.json());

app.set('port', process.env.port || 8000)

app.get("/", (req, res) => {
  res.send({greeting: "Hello World"})
})



module.exports = app;
