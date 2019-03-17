const express = require("express");
const router = express.Router();

// Item Model
const Item = require("../../models/Item");

// @route  GET api/items
// @desc   Get All Items
// @access Public
router.get("/", (req, res) => {
  console.log(req.sessionID);
  Item.find({ sessionID: req.sessionID })
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route  POST api/items
// @desc   Create a Post
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    sessionID: req.sessionID,
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route  DELETE api/items/:id
// @desc   Delete a Post
// @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
