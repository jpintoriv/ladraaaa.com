const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.route('/*')
    .get(function(req, res) {
  res.serveStatic(path.join(__dirname + "dist"));
});
const port = process.env.PORT || 3000;
app.listen(port);
