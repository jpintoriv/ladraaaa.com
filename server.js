const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.route('/*')
    .get(function(req, res) {
  res.sendFile(path.join(__dirname + "/dist/index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port);
