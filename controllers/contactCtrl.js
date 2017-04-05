'use strict';

const Contact = require('../models/contact')

module.exports.show = (req, res) => {
  res.render('contact', { page: 'Contact' })
}


// module.exports.addContact = ( req.body, res, err)

module.exports.addContact = ( {body}, res, err) => {
  Contact.forge(body)
  .save()
  .then( () => res.redirect('/'))
  .catch(err)
}
