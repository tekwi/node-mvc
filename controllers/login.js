// var express = require('express')
//     , passport = require("passport")
//     , passportLocal = require("passport-local")
//     //, mypassport = require('../middlewares/passport')(passport, passportLocal)//
//     , router = express.Router();



// router.get('/register', function(req, res) {
//     res.render('register', { });
// });


// router.get('/', function(req, res) {
//     res.render('login/login', { user : req.user });
// });

// router.post('/', mypassport, function(req, res) {
//     res.redirect('/');
// });

// router.get('/logout', function(req, res) {
//     req.logout();
//     res.redirect('/');
// });

// router.get('/ping', function(req, res){
//     res.status(200).send("pong!");
// });

// module.exports = router;


// SOLUTION - 1
var express = require('express')
    , passport = require('passport')//require('../middlewares/passport')//
    , router = express.Router();



router.get('/register', function(req, res) {
    res.render('register', { });
});


router.get('/', function(req, res) {
    res.render('login/login', { user : req.user });
});

router.post('/', passport.authenticate('local'), function(req, res) {
    res.send({ user : req.user.name + ' - test' });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});

module.exports = router;
