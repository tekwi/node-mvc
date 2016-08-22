var express = require('express')
  , router = express.Router()

//add all routes
router.use('/comments', require('./comments'))
router.use('/users', require('./users'))
router.use('/login', require('./login'))
router.get('/', function(req, res) {
  res.render('index')
})

module.exports = router