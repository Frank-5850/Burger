const express = require("express");
const router = express.Router();
const burger = require("../Models/burger");

router.get("/", (req, res) => {
  // res.send("This is a test");
  burger.selectAll((data) => {
    const handleBarsObject = { burgers: data };
    console.log(handleBarsObject);
    res.render("index", handleBarsObject);
  });
});

router.post("/burger/create", (req, res) => {
  burger.insertOne(req.body.burger_name, () => {
    console.log(res);
  });
});

router.post("/burger/eat", (req, res) => {
  burger.updateOne(req.body.id, () => {
    console.log(res);
  });
});

router.post("/burger/uneat", (req, res) => {
  burger.updateOne(req.body.id, () => {
    console.log(res);
  });
});

module.exports = router;
