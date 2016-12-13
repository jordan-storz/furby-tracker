const express = require('express');
const router = express.Router();


const controller = require('../controllers/index');

router.get('/', function (req, res, next) {
  controller.findUsers().then((users) => {
    res.render('index', {
      title: 'Furby Tracker',
      users
    });
  });
});

router.post('/', function (req, res, next) {
  let info = req.body;
  controller.createUser(info).then((newUser) => {
    console.log(newUser[0]);
    res.redirect(`/users/${newUser[0]}`);
  });
});

module.exports = router;
