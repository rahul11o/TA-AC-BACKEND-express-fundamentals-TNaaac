// --------- Q. Create a basic express server with 2 routes ------------

// let express = require("express");

// let app = express();

// app.get("/", (req, res, next) => {
//   res.send("<h2>Welcome to express</h2>");
// });
// app.get("/about", (req, res, nect) => {
//   res.send("My name is qwerty");
// });

// app.listen(3000, () => {
//   console.log("server listening to port number 3000");
// });

//-------------- Q. Modify above application, add appropriate middleware --------

// let express = require("express");

// let app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.get("/", (req, res, next) => {
//   res.send("<h2>Welcome to express</h2>");
// });
// app.get("/about", (req, res, next) => {
//   res.send("My name is qwerty");
// });
// app.post("/form", (req, res, next) => {
//   res.send(JSON.stringify(req.body));
// });
// app.post("/json", (re, res, next) => {
//   res.send(JSON.stringify(req.body));
// });
// app.listen(3000, () => {
//   console.log("server listening to port number 3000");
// });

// ------------ Q. Modify above application to include  -----------------------

// - logger middleware
// - cookieParser middleware
// - add a middleware to send cookie to the client.

// let express = require("express");
// let logger = require("morgan");
// let cookieParser = require("cookie-parser");

// let app = express();

// app.use(logger("dev"));
// app.use(cookieParser());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use((req, res, next) => {
//   res.cookie("name", "ravi");
//   next();
// });

// app.get("/", (req, res, next) => {
//   res.send("<h2>Welcome to express</h2>");
// });
// app.get("/about", (req, res, next) => {
//   res.send("My name is qwerty");
// });
// app.post("/form", (req, res, next) => {
//   res.send(JSON.stringify(req.body));
// });
// app.post("/json", (re, res, next) => {
//   res.send(JSON.stringify(req.body));
// });
// app.listen(3000, () => {
//   console.log("server listening to port number 3000");
// });

// -------------Q. Modify above application to include----------------

// - a router to capture params from the request on a route `/users/:username` using GET request.
// - capture the username and respond with username in HTML response.

// let express = require("express");
// let logger = require("morgan");
// let cookieParser = require("cookie-parser");

// let app = express();

// app.use(logger("dev"));
// app.use(cookieParser());

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use((req, res, next) => {
//   res.cookie("name", "ravi");
//   next();
// });

// app.get("/", (req, res, next) => {
//   res.send("<h2>Welcome to express</h2>");
// });
// app.get("/about", (req, res, next) => {
//   res.send("My name is qwerty");
// });

// app.get("/users/:username", (req, res, next) => {
//   let result = req.params.username;
//   res.send(`<h2>${result}</h2>`);
// });

// app.post("/form", (req, res, next) => {
//   res.send(JSON.stringify(req.body));
// });
// app.post("/json", (re, res, next) => {
//   res.send(JSON.stringify(req.body));
// });
// app.listen(3000, () => {
//   console.log("server listening to port number 3000");
// });

//------------- Q. Modify above to include error handler middleware ----------------------

// - a 404 handler for routes which are not handled
// - a 500 handler for client/server error

// ### Note:-

// Remember to add error handler middlewares after handling all the routes in the application

let express = require("express");
let logger = require("morgan");
let cookieParser = require("cookie-parser");

let app = express();

app.use(logger("dev"));
app.use(cookieParser());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/admin", (req, res, next) => {
  if (req.url === "/admin") {
    return next("Unauthorized");
  } else {
    return next();
  }
});

app.use((req, res, next) => {
  res.cookie("name", "ravi");
  next();
});

app.get("/", (req, res, next) => {
  res.send("<h2>Welcome to express</h2>");
});
app.get("/about", (req, res, next) => {
  res.send("My name is qwerty");
});

app.get("/users/:username", (req, res, next) => {
  let result = req.params.username;
  res.send(`<h2>${result}</h2>`);
});

app.post("/form", (req, res, next) => {
  res.send(JSON.stringify(req.body));
});
app.post("/json", (re, res, next) => {
  res.send(JSON.stringify(req.body));
});

// 404

app.use((req, res, next) => {
  res.send("Page not found");
});

// custom error

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log("server listening to port number 3000");
});
