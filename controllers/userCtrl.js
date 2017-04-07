'use strict';

const User = require('../models/user')

module.exports.show = (req, res) => {
  res.render('register', { page: 'Register' })
}

module.exports.create = ({body: {email, password, confirmation}}, res) => {
  if (password === confirmation) {
    console.log('whatt')
    User.findOneByEmail(email)
    .then( (user) => {
      if (user) return res.render('register', { msg: 'Email is already registered'})
      return User.forge({email, password})
      .save()
      .then( () => {
        res.redirect('/')
      })
      // catch for the save
      .catch( (err) => res.render('register', { msg: 'Dang. There was probz. Try again.'}))
    })
    // catch for findOneByEmail
    .catch( (err) => res.render('register', {msg: 'Dang. There was a probz. Try again.'}))

  } else {
    res.render('register', { msg: 'Oops. Password and confirmation do not match. Try again'})
  }
}
