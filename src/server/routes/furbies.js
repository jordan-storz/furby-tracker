const express = require('express');
const router = express.Router();

const controller = require('../controllers/furbies');

router.get('/', function (req, res, next) {
  res.render('index', {title: 'Furby Tracker'})
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
  let info = req.body;
  if (!req.body.image_url) {
    let message = 'A url is required!';
    let url = `/users/${req.body['user_id']}?validationMessage=${message}`;
    return res.redirect(url);
  }
  controller.createFurby(info).then((furby) => {
    return res.redirect(`/users/${req.body['user_id']}`);
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
