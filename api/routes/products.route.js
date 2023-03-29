const express = require('express');
const router = express.Router();
const product = require('../services/products.service');

/* GET programming languages. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await product.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting product services `, err.message);
    next(err);
  }
});

module.exports = router;