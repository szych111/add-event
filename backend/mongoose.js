const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://alex:mongobongo!@cluster0.xroax.mongodb.net/events?retryWrites=true&w=majority').then(() => {
    console.log('Connected to database!')
}).catch(() => {
    console.log('Connection failed!')
})


const createEvent = async (req, res, next) => {
    const createdEvent = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        eventDate: req.body.eventDate
    }
    const result = await createdEvent.save()
    res.json({result})
}

const getEvents = async (req, res, next) => {
    const events = await Events.find().exec()
    res.json(events)
}


exports.createEvent = createEvent
exports.getEvents = getEvents