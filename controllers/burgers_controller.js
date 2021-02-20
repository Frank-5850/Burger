const express = require("express");
const router = express.Router();
const burger = require("../Models/burger");

router.get("/", (req, res) => {
  // res.send("This is a test");
  burger.selectAll((data) => {
    const handleBarsObject = { burgers: data };
    res.render("index", handleBarsObject);
  });
});

router.post("/burger/create", (req, res) => {
  burger.insertOne(req.body.burger_name, () => {
    res.redirect("/");
  });
});

router.post("/burger/eat/:id", (req, res) => {
  burger.updateOne(req.params.id, () => {
    res.redirect("/");
  });
});

router.post("/burger/uneat/:id", (req, res) => {
  burger.returnOne(req.params.id, () => {
    res.redirect("/");
  });
});

module.exports = router;
