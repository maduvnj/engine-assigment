const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const addNameData = require('./add-name');

const router = express.Router();

router.get('/users', (req, res, next) => {
  const products = addNameData.products;
  res.render('users', {
    prods: products,
    pageTitle: 'Users',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});

module.exports = router;
