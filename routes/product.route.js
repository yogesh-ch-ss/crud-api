const express = require("express");
const router = express.Router();

const Product = require("../models/product.model.js");

const {
  getProducts,
  getProduct,
  postProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js");

// GET API
router.get("/", getProducts);
router.get("/:id", getProduct);

// POST API
router.post("/", postProduct);

// Update API
// app.put(); -> used to update -> full replacenent of the data
// app.patch(); -> also used to update -> partial replacement (fields)
router.put("/:id", updateProduct);

// DELETE API
router.delete("/:id", deleteProduct);

module.exports = router;
