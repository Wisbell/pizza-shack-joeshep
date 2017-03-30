'use strict';

const { Router } = require('express');
const router = Router()

// public routes
    // anyone can go to these pages whether they are logged in or not
router.use(require('./about'))
router.use(require('./contact'))
router.use(require('./login'))
router.use(require('./register'))
router.use(require('./root'))       // Homepage


// login guard middleware.
    // send user back home if they are not registered
    // TODO: define isAuthenticated

// router.use( (req, res, next) => {
//   if(req.isAuthenticated()){
//     next();
//   } else {
//     res.redirect('/login')
//   }
// })


// private routes
// router.use(require('./logout'))
// router.use(require('./order'))


module.exports = router
