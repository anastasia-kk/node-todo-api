var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://138.68.88.142:27017/TodoApp');

module.exports = {mongoose};
