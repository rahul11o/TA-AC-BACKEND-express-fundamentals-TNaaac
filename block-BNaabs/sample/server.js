let express = require("express");
let logger = require("morgan");
let path = require("path");
let app = express();

// app.use((req, res, next) => {
//   console.log(req.url, req.method);
// });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/new", (req, res, next) => {
  res.sendFile(path.join(__dirname, "new.html"));
});

app.get("/users/:username", (req, res, next) => {
  let result = req.params.username;
  res.send(result);
});

app.post("/new", (req, res, next) => {
  res.send(JSON.stringify(req.body));
});

app.listen(6354, () => {
  console.log("server listening on port 6354");
});
