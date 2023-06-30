const { Router } = require("express");

const router = Router();

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

router.get("/groceries", (req, res) => {
  res.send(groceryList);
});

// route parameters
router.get("/groceries/:item", (req, res) => {
  const { item } = req.params; // js destructuring
  console.log(item);
  const groceryItem = groceryList.find((g) => g.item === item);
  res.send(groceryItem);
  //res.send(req.params.item); // req.params returns a dictionary; .item is a dictionary method
});

router.post("/groceries", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.sendStatus(200);
});

module.exports = router;
