const express = require("express");
const path = require("path");
let app = express();
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"), (err) => {
    if (err) {
      console.log(err);
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port);
