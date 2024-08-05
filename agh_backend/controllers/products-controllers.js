const fs = require('fs');

const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');

const getProductsByCategory = async (req, res, next) => {
  let products;
  let category = req.params.category || 'zippers'
  console.log(category)
  fs.readFile('productCategories.json', 'utf8', (err, data) => {
    if (err) {
      const error = new HttpError("Issue reading product file. Please try again", 404)
      console.error(error);
      return;
    }
    products = JSON.parse(data).products;

    const filteredProducts = products.filter(product => {
      console.log( product.category)
      console.log( category)
      console.log(product.category == category)
      return product.category == category});
    console.log(filteredProducts)
    res.json(filteredProducts)
  });
}

exports.getProductsByCategory = getProductsByCategory;
