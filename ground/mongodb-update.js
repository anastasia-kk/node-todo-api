// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://138.68.88.142:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b9d55e276ecf44ee11be111')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) =>{
    console.log(result);
  });

//  db.close();
});
