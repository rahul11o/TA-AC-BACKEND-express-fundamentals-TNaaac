let express = require("express");
let logger = require("morgan");
let cookieParser = require("cookie-parser");

let app = express();

// app.use((req,res,next)=>{
//     console.log(req.method, req.url)
//     next()
// })

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());

app.use((req, res, next) => {
  app.use((req, res, next) => {
    res.cookie("username", "suraj");
    next();
  });
  res.cookie("username", "suraj");
  next();
});

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.get("/about", (req, res, next) => {
  res.send("Welcome!");
});

app.listen(5344, () => {
  console.log("server listening on port 5344");
});
