const mongodb = require('mongodb');

const uri = 'mongodb://localhost/carebnb';
// Connect to Database
mongodb.MongoClient.connect(uri, (connectionErr, client) => {
  if (connectionErr) throw connectionErr;
  // Clear Database
  client.db('carebnb').dropDatabase((dropErr) => {
    if (dropErr) throw dropErr;
    client.close((closeErr) => {
      if (closeErr) throw closeErr;
    });
  });
});
