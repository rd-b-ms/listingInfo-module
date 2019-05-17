const mongodb = require('mongodb');
const mockData = require('./dataGenerator.js');

const uri = 'mongodb://localhost/carebnb';

// Connect to database
mongodb.MongoClient.connect(uri, (connectionErr, client) => {
  if (connectionErr) throw connectionErr;
  const db = client.db('carebnb');
  const homeData = db.collection('homeData');
  // Insert Mock data
  homeData.insert(mockData, (insertErr) => {
    if (insertErr) throw insertErr;
    client.close((closeErr) => {
      if (closeErr) throw closeErr;
    });
  });
});
