const express = require('express')
const { check } = require('express-validator')
const router = express.Router()
const eventsController = require('../controllers/events-controller')

router.get('/', eventsController.getEvents)

router.post('/', [
    check('firstName').isLength({min: 2}),
    check('lastName').isLength({min: 2}),
    check('email').normalizeEmail().isEmail(),
], eventsController.createEvent)

module.exports = router