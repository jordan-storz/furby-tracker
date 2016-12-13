const express = require('express');
const router = express.Router();

const controller = require('../controllers/furby');

router.get('/', function (req, res, next) {
  res.render('index', {title: 'Furby Tracker'})
});

module.exports = router;
