var express = require('express')
  , router = express.Router()
  , Comment = require('../models/comment')
  , auth = require('../middlewares/auth')

router.post('/', auth, function(req, res) {
  user = req.user.id
  text = req.body.text

  Comment.create(user, text, function (err, comment) {
    res.redirect('/')
  })
})

router.get('/:id', auth, function(req, res) {
  Comment.get(req.params.id, function (err, comment) {
    res.render('comments/comment', {comment: comment})
  })
})

module.exports = router