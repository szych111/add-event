const HttpError = require('../models/http-error')
const { validationResult } = require('express-validator')
const Event = require('../models/event')


const postEvent = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid inputs passed, please check your data', 422))
    }

    const { firstName, lastName, email, eventDate} = req.body

    const newEvent = new Event({
        firstName,
        lastName,
        email,
        eventDate
    })

    try {
        await newEvent.save()
    } catch (err) {
        const error = new HttpError('Creating event failed, please try again.', 500)
        return next(error)
    }
   
    res.status(201).json({event: newEvent.toObject({getters: true})})
}

const getEvents = async (req, res, next) => {
    const events = await Event.find().exec()
    res.json(events)
}


exports.getEvents = getEvents
exports.postEvent = postEvent