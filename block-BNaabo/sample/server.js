let path = require("path");
let express = require("express");
let app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.json());
app.use(express.urlencoded());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "/public")));

app.post("/json", (req, res, next) => {
  console.log(req.body);
});

app.post("/contact", (req, res, next) => {
  console.log(req.body);
  next();
});

app.listen(6000, () => {
  console.log("server listening to port 6000");
});
