const fs = require('fs')
const path = require('path')
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//placesRoutes is a middleware (it is the router object in plaes routes. router.get(...))
//we compartmentalize this way to keep files lean
const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/user-routes");
const productsRoutes = require("./routes/products-routes");
const HttpError = require("./models/http-error");

const mongoUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.27vqhss.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
const app = express();

//automatically parses the incoming data of post requests body and calls next
app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')))

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
})

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes)

app.use((req, res, next) => {
  const error = new HttpError("Could not find this route.", 404);
  next(error);
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err)
    })
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occurred" });
});

mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
