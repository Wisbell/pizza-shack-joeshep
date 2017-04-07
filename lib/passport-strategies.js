'use strict';

const passport = require('passport')
const { Strategy } = require('passport-local')
const { knex } = require('../db/database')

const User = require('../models/user');

passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser( (id, done) => {
  // knex('users').where({id: id}) - es5
  knex('users').where({id}).first()
  .then( (user) => { done(null, user) })
  // done will be called with err if there is an error.
  .catch( (err) => { done(err, null) })
})

const localStrategy = new Strategy({
  // { // is thi rightt
    usernameField: 'email',
    passwordField: 'password'
  },
    (email, passwordStr, done) => {
      User.findOneByEmail(email)
      .then( (user) => {
        if (user) {
          return Promise.all([
              user,
              user.comparePass(passwordStr)
            ])
        }
        done( null, null, { msg: 'Email does not exist in our system'})
      })
      .then( ([user, matches]) => {
        if (matches) {
          done(null, user, {msg: 'Succesfully logged in'})
        } else {
          done(null, null, {msg: 'Password does not match'})
        }
      })
      .catch(done)
    })

passport.use(localStrategy)
