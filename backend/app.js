const express = require('express')
const eventsRoutes = require('./routes/events-routes')
const HttpError = require('./models/http-error')
const mongoose = require('mongoose')

const app = express();


app.use(express.json());

app.use('/api/events', eventsRoutes)

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404)
    throw error
})

app.use((error, req, res, next) => {
    if (res.headerSent) {
        return next(error)
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred'})
})

mongoose
.connect('mongodb+srv://alex:mongobongo!@cluster0.xroax.mongodb.net/events?retryWrites=true&w=majority')
.then(() => {
    app.listen(5000)
})
.catch(err => {
    console.log(err)
})