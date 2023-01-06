// This test is hardcoded to run on localhost
require('./mongodb_helper');
const app = require('../app');
const request = require('supertest');
const Beer = require('../models/beerModel');

describe('/api/beers', () => {
  beforeEach(async () => {
    await Beer.deleteMany({});
  });

  describe('GET, data response', () => {
    it('shows a successful response, 200', async () => {
      let response = await request(app)
        .get('/api/beers')
      expect(response.statusCode).toBe(200);
    });
  })
});


