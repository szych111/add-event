import supertest from 'supertest'
import app from './app.js'

describe('POST /events', () => {

    describe('given a set of data', () => {
      //should save the data in the database
      //should respond with a json object
      //should respond with a 200 status code
      test('should respond with a 200 status code', async () => {
        const response = await request(app).post('/events').send({
          firstName: 'first name',
          lastName: 'last name',
          email: 'email',
          eventDate: 'event date'
        })
        expect(response.statusCode).toBe(200)
      })

    }

    )
  
  })