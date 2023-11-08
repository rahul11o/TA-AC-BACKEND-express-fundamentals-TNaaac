let express = require("express");
let logger = require("morgan");

let app = express();

app.use(logger("dev"));

app.use((req, res, next) => {
  console.log(req.url);
  // if requested url is /admin throw error
  if (req.url === "/admin") {
    return next("Unauthorized");
  }
  // other let it pass to next middleware by simply calling next()
  next();
});

app.get("/", (req, res, next) => {
  res.send("Welcome to index page");
});

app.get("/about", (req, res, next) => {
  res.send("welcome to About page");
});

app.use((req, res, next) => {
  res.send("Page not found");
});

// When there is an error

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(8768, () => {
  console.log("server lsitening on port 8768 ");
});
