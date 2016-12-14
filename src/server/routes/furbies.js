const express = require('express');
const router = express.Router();

const controller = require('../controllers/furbies');


function isValidUrl(url) {
  let regex = /https?:\/\/.*/g;
  return regex.test(url);
}

router.get('/', function (req, res, next) {
  controller.findAllFurbies().then((furbies) => {
    res.render('furby-index', {furbies})
  });
});

router.get('/:id', function (req, res, next) {
  controller.findFurby(req.params.id).then((furby) => {
    res.render('furby', {furby});
  });
});

router.get('/:id/edit', function (req, res, next) {
  controller.findFurby(req.params.id).then((furby) => {
    res.render('edit-furby', {furby});
  });
});

router.post('/', function(req, res, next) {
  if (!isValidUrl(req.body.image_url)) {
    let message = 'Invalid URL!';
    let attemptedUrl = req.body.image_url;
    let url =
      `/users/${req.body['user_id']}?validationMessage=${message}&attemptedUrl=${attemptedUrl}`;
    return res.redirect(url);
  } else {
    next();
  }
});

router.post('/', function(req, res, next) {
  let info = req.body;
  if (!req.body.image_url) {
    let message = 'A url is required!';
    let url = `/users/${req.body['user_id']}?validationMessage=${message}`;
    return res.redirect(url);
  }
  controller.createFurby(info).then((furby) => {
    let successMessage = 'Furby created!';
    let url = `/users/${req.body['user_id']}?successMessage=${successMessage}`;
    return res.status(200).redirect(url);
  }).catch((error) => {
    let message = 'User already has this furby!';
    let attemptedUrl = info.image_url;
    let url =
      `/users/${req.body['user_id']}?validationMessage=${message}&attemptedUrl=${attemptedUrl}`;
    return res.redirect(url);
  });
});

router.put('/:id', function(req, res, next) {
  controller.editFurby(req.params.id, req.body).then((furbyId) => {
    res.status(200).json({
      message: 'Furby updated!',
      redirectUrl: `/furbies/${furbyId}`
    });
  });
});

router.delete('/:id', function(req, res, next) {
  controller.deleteFurby(req.params.id).then((data) => {
    console.log(data);
    res.json({
      message: 'Furby deleted!',
    });
  });
});

module.exports = router;
