const request = require('supertest');
const app = require('../server/app');


describe('Client-server connection', () => {
  it('Should get a response given a valid GET request', () => request(app)
    .get('/listinginfo/')
    .then((response) => {
      expect(response.statusCode).toBe(200);
    }));

  it('Should 404 a bad GET request', () => request(app)
    .get('/listinginfo/xyz')
    .then((response) => {
      expect(response.statusCode).toBe(404);
    }));
});

describe('Server-database connection', () => {
  it('Should respond with an array of mock data on a valid GET request', () => request(app)
    .get('/listinginfo/')
    .then((response) => {
      expect(response.body.length).toBe(100);
    }));

  it('Should give the proper mock data on a valid GET request', () => request(app)
    .get('/listinginfo/')
    .then((response) => {
      const { hostName } = response.body[Math.floor(Math.random() * 100)];
      expect(typeof hostName).toBe('string');
    }));

  it('Should 404 a bad GET request', () => request(app)
    .get('/listinginfo/xyz')
    .then((response) => {
      expect(response.statusCode).toBe(404);
    }));
});
