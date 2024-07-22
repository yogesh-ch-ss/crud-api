const express = require("express");
const mongoose = require("mongoose");
const app = express();

const Product = require("./models/product.model.js");

const productRoute = require("./routes/product.route.js");

// middleware
app.use(express.json()); // middleware to use json in express
app.use(express.urlencoded({ extended: false })); // middleware to use form url in express

// routes
app.use("/api/products", productRoute);

// GET API

app.get("/", (req, res) => {
  res.send("Hello from Node API Server");
});

// POST API

// Update API
// app.put(); -> used to update -> full replacenent of the data
// app.patch(); -> also used to update -> partial replacement (fields)

// DELETE API

// connect mongodb and listen on port
mongoose
  .connect(
    "mongodb+srv://yogeshchsamant:7xcE23NfxhlNy7kc@backenddb.onw1756.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to database!");

    // port config
    app.listen(3000, () => {
      console.log("hello world, server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection to the database failed");
  });
