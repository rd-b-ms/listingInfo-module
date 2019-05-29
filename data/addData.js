const db = require('./index');
const mockData = require('./dataGenerator.js.js');

db('insert', () => {}, mockData);
