var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 3000
  , passport = require("passport")
  , passportLocal = require("passport-local")
  , cookieParser = require("cookie-parser")
  , expressSession = require("express-session");

//app.set('views', __dirname + '/views')
//app.engine('jade', require('jade').__express)
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//
// configure express session
app.use(bodyParser.urlencoded({ extended : false }));
app.use(cookieParser());
app.use(expressSession({ 
		secret: process.env.SESSION_SECRET || 'secret',   
		resave: true,
    	saveUninitialized: true
    }));

//init passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(new passportLocal.Strategy(function (username, password, done) {
	if (username === 'sam') {
		done(null, {id: username, name: username});
	}else {
		done(null, null);
	}
}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id ,done) {
	done(null, {id: id, name: id});
});
//

app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port ' + port)
})