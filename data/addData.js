const db = require('./index');
const mockData = require('./dataGenerator.js');

db('insert', () => {}, mockData);
