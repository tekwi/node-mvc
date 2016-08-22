
// var cookieParser = require("cookie-parser");
// var expressSession = require("express-session");
// var passport = require("passport");
// var passportLocal = require("passport-local");


module.exports = function (passport, passportLocal) {

// configure express session
// router.use(bodyParser.urlencoded({ extended : false }));
// router.use(cookieParser());
// router.use(expressSession({ 
// 		secret: process.env.SESSION_SECRET || 'secret',   
// 		resave: true,
//     	saveUninitialized: true
//     }));

// //init passport
// router.use(passport.initialize());
// router.use(passport.session());

passport.use(new passportLocal.Strategy(function (username, password, done) {
	if (username === 'sam') {
		done(null, {id: username, name: username});
	}else {
		done(null, null);
	}
}));
console.log('passport middleware')
passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id ,done) {
	done(null, {id: id, name: id});
});

function verifyAuthencticated (req, res, next) {
	if (req.isAuthenticated()){
		next(null, {"success": "1"});
	} else {
		res.redirect("/login?rurl="+req.url);
	}
}
//next();
}

