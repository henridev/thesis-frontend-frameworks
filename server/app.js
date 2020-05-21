const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const nocache = require("nocache");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

require("./configs/database");

const app_name = require("./package.json").name;

const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(nocache());

// CORS  headers
app.use(
  cors({
    origin: (origin, cb) => {
      cb(null, process.env.NODE_ENV !== "production");
    },
    optionsSuccessStatus: 200,
    credentials: true,
  })
);
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set the public folder to "~/client/build/"
// Example: http://localhost:5000/favicon.ico => Display "~/client/build/favicon.ico"
app.use(express.static(path.join(__dirname, "../client/react-front/build")));

app.use("/api/todo", require("./routes/todo"));

app.use("/api/*", (req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// we can send our entry html file in any other case
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Error handler
app.use((err, req, res, next) => {
  console.error("----- An error happened -----");
  console.error(err);

  if (!res.headersSent) {
    res.status(err.status || 500);
    if (process.env.NODE_ENV === "production") res.json(err);
    else
      res.json(
        JSON.parse(JSON.stringify(err, Object.getOwnPropertyNames(err)))
      );
  }
});

module.exports = app;
