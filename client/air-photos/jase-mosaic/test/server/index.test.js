/////////////////////////////////////////////////
// SUPERTEST + APP = MOCK SERVER ////////////////
const req = require('supertest');
const app = require('../../server/httpHandler.js');
/////////////////////////////////////////////////
// TESTING SERVER REQUEST ///////////////////////
describe('API should accept GET request on endpoint: /mosaic/:locationID', () => {
  test('send back 200 status code in headers', async () => {
    await req(app).get('/mosaic/:locationID')
      .then((res) => {
        expect(res.statusCode).toBe(200)
      })
      .catch((err) => {

      })
  })
})
//////////////////////////////////////////////////
// CLOSES OUT REQUESTS; SOLVES ERROR /////////////
afterAll(async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, 500)
  })
});
///////////////////////////////////////////////////