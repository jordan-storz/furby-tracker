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

router.get('/users/:id', function(req, res, next) {
  let id = req.params.id;
  controller.findUserAndFurbies(id).then((data) => {
    if (data.length === 0) {
      controller.findUser(id).then((user) => {
        console.log(user);
        res.render('user.html', {username: user.username});
      });
    } else {
      res.render('user.html', {
        username: data[0].username,
        furbies: data
      });
    }
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
