'use strict'

const passport = require('passport');
module.exports.show = (req, res) =>
  res.render('login');

module.exports.create = (req, res, next) =>
  passport.authenticate('local', (err, user, msg) => {
    if (err) return next(err)
    if (!user) return res.render('login', msg)

    req.login(user, (err) => {
      if (err) return next(err)
      res.redirect('/')
    })
  })(req, res, next)


// (req,res, next)


module.exports.edit = (req, res) =>
  res.render('logout', {page: 'Logout'})


module.exports.destroy = (req, res) => {
  res.logout()
  res.redirect('/login')
}
