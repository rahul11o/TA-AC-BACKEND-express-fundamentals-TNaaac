let express = require("express");

let app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("Welconme to express!");
});

app.listen(4000, () => {
  console.log("server listening on port 4000");
});
