let express = require("express");
let logger = require("morgan");
let cookieparser = require("cookie-parser");
let path = require("path");

let app = express();

// middleware for capturing form/json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cookieparser());
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/about", (req, res, next) => {
  res.sendFile(path.join(__dirname, "about.html"));
});
app.get("/contact", (req, res, next) => {
  res.sendFile(path.join(__dirname, "contact.html"));
});

app.get("/users", (req, res, next) => {
  res.send("Ha bol bhai");
});

// Handling 404
app.use((req, res, next) => {
  res.send("Page not found");
});

app.listen(4000, () => {
  console.log("server listening to port 4000");
});
