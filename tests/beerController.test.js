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

    it('returns success response for individual beer', async () => {
      let response = await request(app)
        .get('/api/beers/63b6fb1e77559bc7a95ffd3d')
      expect(response.statusCode).toBe(200);
    });
  })

  xit('returns beers from API', async () => {
    let mockBeer = new Beer({
      image: '',
      title: 'Adnams Ghost Ship Bottle Beer 0.5%',
      brand: 'Adnams',
      abv: '0.5',
      calories: '23',
      type: 'Ale',
      ingredients: 'Water, Malted Barley, Malted Rye, Hops, Yeast',
      country: 'UK',
      volume: '500',
      description: 'An un-boo-lievably crisp taste. Will raise your spirits if shipwrecked.',
    })
    await mockBeer.save();
    let response = await request(app)
      .get("/posts");
    expect(response.body).toEqual([]);
  })
});


