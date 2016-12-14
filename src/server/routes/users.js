const express = require('express');
const router = express.Router();


const controller = require('../controllers/users');

function queryUrlPackager(req) {
  let url
}

router.get('/', function (req, res, next) {
  if (req.query.furbyUrl) {
    controller.findUsersWithFurbyUrl(req.query.furbyUrl).then((data) => {
      return res.render('users-with-furby', {
        furby: data.furby,
        users: data.users
      })
    });
  } else {
    let validationMessage = req.query.validationMessage || null;
    let attemptedName = req.query.attemptedName || null;
    controller.findUsers().then((users) => {
      return res.render('index', {
        title: 'Furby Tracker',
        users,
        validationMessage,
        attemptedName
      });
    });
  }
});


router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  let validationMessage = req.query.validationMessage || null;
  let attemptedUrl = req.query.attemptedUrl || null;
  let successMessage = req.query.successMessage || null;
  controller.findUserAndFurbies(id).then((data) => {
    if (data.furbies.length === 0) {
      data.furbies = null;
    }
    res.render('user.html', {
      user: data.user,
      furbies: data.furbies,
      validationMessage,
      attemptedUrl,
      successMessage
    });
  });
});

router.post('/', function (req, res, next) {
  let info = req.body;
  if (!req.body.username) {
    let queryValidationMessage = 'Username required';
    res.status(500).redirect(`/users?validationMessage=${queryValidationMessage}`);
  } else {
    controller.createUser(info).then((newUser) => {
      res.redirect(`/users/${newUser[0]}`);
    }).catch((error) => {
      if (error.detail.includes('already exists')) {
        let message = 'Username is taken. Try another?';
        res.status(500).redirect(`/users?validationMessage=${message}&attemptedName=${req.body.username}`);
      }
    });
  }
});

router.delete('/:id', function(req, res, next) {
  controller.deleteUser(req.params.id).then((data) => {
    res.json({
      message: 'User deleted!',
      redirectUrl: '/'
    });
  });
});

module.exports = router;
