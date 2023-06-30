const express = require("express");

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Home page");
});

app.get("/groceries", (req, res) => {
  res.send([
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
  ]);
});
