// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:50016/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

//deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
//deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

//findOneandDelete
  // db.collection('Todos').findOneandDelete({completed: true}).then((result) => {
  //   console.log(result);
  // });

//  db.close();
});
