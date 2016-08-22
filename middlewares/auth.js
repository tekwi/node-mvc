

module.exports = function(req, res, next) {
  if (req.params.user) {
    next(req.params.user)
  } else {
  	console.log(req.params)
    res.status(401).end('Unauthorized access')
  }
}