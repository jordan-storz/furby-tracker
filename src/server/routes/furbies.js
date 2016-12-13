const express = require('express');
const router = express.Router();

const controller = require('../controllers/furbies');

router.get('/', function (req, res, next) {
  res.render('index', {title: 'Furby Tracker'})
});

router.post('/', function(req, res, next) {
  let info = req.body;
  controller.createFurby(info).then((furby) => {
    res.redirect(`/users/${req.body['user_id']}`);
  });
});

module.exports = router;
