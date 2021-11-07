const HttpError = require('../models/http-error')
const { validationResult } = require('express-validator')
const Event = require('../models/event')

const DUMMY_EVENTS = [
    {
        firstName: 'Gordon',
        lastName: 'Brown',
        email: 'test@test.com',
        eventDate: 'Dec 25, 2021'
    }
]

const createEvent = async (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return next(new HttpError('Invalid inputs passed, please check your data', 422))
    }

    const { firstName, lastName, email, eventDate} = req.body

    const createdEvent = new Event({
        firstName,
        lastName,
        email,
        eventDate
    })

    try {
        await createdEvent.save()
    } catch (err) {
        const error = new HttpError('Creating event failed, please try again.', 500)
        return next(error)
    }
   
    res.status(201).json({event: createdEvent})
}

const getEvents = async (req, res, next) => {
    const events = await Event.find().exec()
    res.json(events)
}


exports.getEvents = getEvents
exports.createEvent = createEvent