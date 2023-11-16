let express = require("express");
let logger = require("morgan");

let app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url, new Date().toLocaleTimeString());
});

app.listen(4345, () => {
  console.log("server is running on port 4345");
});
