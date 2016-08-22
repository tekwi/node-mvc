var express = require('express')
  , router = express.Router()
  , User = require('../models/user')

// Define routes handling profile requests
router.get('/:id', function(req, res) {
  User.get(req.params.id, function (err, user) {
    res.render('users/user', {user: user})
  })
})
module.exports = router