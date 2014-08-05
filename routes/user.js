var db = require('../models')

exports.create = function(req, res) {
  db.User.create({ email: req.param('email') }).success(function() {
    res.redirect('/')
  })
}
