const { Pool } = require('pg');

const pgPool = new Pool({
  host: 'ec2-3-84-194-137.compute-1.amazonaws.com',
  user: 'postgres',
  password: 821,
  port: 5432,
  database: 'listinginfo',
});
pgPool.connect()
  .then(() => console.log('connected'))
  .catch(err => console.error('connection error', err.stack));


// Connect to database
const connect = (type, cb, data) => {
  console.log('data is', data);
  if (type === 'get') {
    pgPool.query('SELECT * FROM listinginfo1 WHERE id= $1', [data], (err, res) => {
      if (err) {
        console.log(err);
        cb(err);
      } else {
        cb(null, res.rows);
      }
    });
  }
  if (type === 'post') {
    console.log('post here');
    // pgPool.query('', [])
  }
};


module.exports = connect;
// const mongodb = require('mongodb');
// const uri = 'mongodb://localhost/carebnb';
// mongodb.MongoClient.connect(uri, (connectionErr, client) => {
//   if (connectionErr) throw connectionErr;
//   const db = client.db('carebnb');
//   const homeData = db.collection('homeData');
//   // Query database
//   if (type === 'get') {
//     console.log(data);
//     homeData.find().toArray((err, result) => {
//       if (err) cb(err);
//       cb(null, result);
//     });
//   }
//   if (type === 'insert') {
//     if (homeData.find()) {
//       // Checks if data exists, drops if exists
//       client.db('carebnb').dropDatabase((dropErr) => {
//         if (dropErr) throw dropErr;
//       });
//     }
//     homeData.insert(data, (insertErr) => {
//       // insert mock data
//       if (insertErr) throw insertErr;
//       client.close(() => {
//         console.log('Seed data successfully added');
//         process.exit(0);
//       });
//     });
//   }
//   if (type === 'put') {
//     homeData.updateOne(data, { $set: { hostName: 'sarah' } }, (updateErr) => {
//       if (updateErr) throw updateErr;
//       console.log('Data updated');
//     });
//   }
//   if (type === 'delete') {
//     homeData.deleteOne(data, (deleteErr) => {
//       if (deleteErr) throw deleteErr;
//       console.log('Data deleted');
//     });
//   }
// });
