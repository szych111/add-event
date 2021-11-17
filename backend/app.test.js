const request = require('supertest')

const app = require('./app')

const request = supertest(app)


test('getting events', async done => {
    const res = await request.get('/api/events')
    
    expect(res.status).toBe(200)
    done()
} )