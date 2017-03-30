'use strict';

const { Router } = require('express')

const { show } = require('../controllers/registerCtrl')

const router = Router()

router.get('/register', show)

module.exports = router;
