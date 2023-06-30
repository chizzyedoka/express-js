const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json()); // middlware to post json
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

const groceryList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "cereal",
    quantity: 1,
  },
  {
    item: "sugar",
    quantity: 3,
  },
];

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

app.get("/groceries", (req, res) => {
  res.send(groceryList);
});

// route parameters
app.get("/groceries/:item", (req, res) => {
  const { item } = req.params; // js destructuring
  console.log(item);
  const groceryItem = groceryList.find((g) => g.item === item);
  res.send(groceryItem);
  //res.send(req.params.item); // req.params returns a dictionary; .item is a dictionary method
});

app.post("/groceries", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.sendStatus(200);
});
