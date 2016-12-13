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
    if (data.furbies.length === 0) {
      data.furbies = null;
    }
    res.render('user.html', {
      user: data.user,
      furbies: data.furbies
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

router.delete('/users/:id', function(req, res, next) {
  controller.deleteUser(req.params.id).then((data) => {
    res.json({
      message: 'User deleted!',
      redirectUrl: '/'
    });
  });
});

module.exports = router;
