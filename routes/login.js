// 'use strict';

// const { Router } = require('express')

// const { show } = require('../controllers/loginCtrl')

// const router = Router()

// router.get('/login', show)

// module.exports = router;

'use strict'

const { Router } = require('express')

const session = require('../controllers/sessionCtrl')

const router = Router()

router.get('/login', session.show)
router.post('/login', session.create)

module.exports = router
