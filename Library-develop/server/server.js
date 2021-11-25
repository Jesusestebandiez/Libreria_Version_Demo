
const express = require("express");
const logger = require("morgan");

const {connect} = require("./app/config/database");

const users = require("./app/api/routes/user.route");
const books = require("./app/api/routes/book.route");

const HTTPSTATUSCODE = require("./app/utils/httpStatusCode");
const cors = require("cors");


connect();

const app = express();

app.set("secretKey", "nodeRestApi"); 

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4000'],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));


app.use("/users", users);
app.use("/books", books);

app.use((req, res, next) => {
  let err = new Error();
  err.status = 404;
  err.message = HTTPSTATUSCODE[404];
  next(err);
});


app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message || 'Unexpected error');
})

app.disable('x-powered-by')

app.listen(4000, () => {
  console.log("Node server listening on port 4000");
});
