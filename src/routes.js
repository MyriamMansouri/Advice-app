const express = require('express');
const router = express.Router();

const getQuote = require('./data')

//routes
router.get('/', async function(req, res) {
  const quote = await getQuote()
  res.render('home', {layout: 'default', template: 'home-template', quote});
  });

module.exports = router;