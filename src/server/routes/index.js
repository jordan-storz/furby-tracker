const express = require('express');
const router = express.Router();


const controller = require('../controllers/index');

router.get('/', function(req, res) {
  res.redirect('/users');
})

module.exports = router;
