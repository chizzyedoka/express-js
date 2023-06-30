const express = require("express");

const app = express();
const PORT = 3001;

app.use(express.json()); // middlware to post json
app.use(express.urlencoded());

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

app.get("/", (req, res) => {
  res.send("Welcome to the Home page");
});

app.get("/groceries", (req, res) => {
  res.send(groceryList);
});

app.post("/groceries", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.sendStatus(200);
});
