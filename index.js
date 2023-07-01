const express = require("express");
const cookieParser = require("cookie-parser");
const groceriesRoute = require("./routes/groceries");
const supermarketsRoute = require("./routes/markets");

const app = express();
const PORT = 3001;

app.use(express.json()); // middlware to post json
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use(cookieParser());

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.use("/api", groceriesRoute); // prefix route with /api
app.use("/supermarkets", supermarketsRoute);

app.get(
  "/",
  // adding middleware
  (req, res, next) => {
    console.log("Before handling request");
    next(); // to transfer functionality to the next middleware
  },
  (req, res) => {
    res.send("Welcome to the Home page");
  }
);
