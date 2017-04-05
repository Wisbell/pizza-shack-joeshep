'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const routes = require('./routes');  // defaults for looking for an index.js file

// pug template configuration
app.set('view engine', 'pug');

// app.locals is like process.env variables
// whatever you assign should be available
// through out your app - including pug templates
app.locals.company = "Pizza Shack";
app.locals.body = {};
app.locals.body.magic = "Foooooooooooooo!";
app.locals.errors = {};

// Middlewares
app.use(express.static('public'))   // defaults to looking for index file
app.use(bodyParser.urlencoded({extended: false}));
app.use(routes) // import routes from routes folder


// // app.get('/', (req, res, next) => {
// //   console.log('home route loaded')

// //   res.render('index')
// // })


// app.get('/contact', (req, res, next) => {
//   console.log('contact route loaded')

//   res.render('contacts', { page: 'Contact'})
// })

// app.get('/login', (req, res, next) => {
//   console.log('login route loaded')

//   res.render('login', { page: 'Login'})
// })

// app.get('/register', (req, res, next) => {
//   console.log('register route loaded')

//   res.render('register', { page: 'Register'})
// })




app.use( (req, res) => {
  res.render('404')
})

// ***   End of Middleware   ***

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
