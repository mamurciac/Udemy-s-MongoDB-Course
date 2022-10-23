'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cursoMongoUdemy')
.then(() => {
  console.log('La conexión se ha realizado correctamente');
}).catch(error => {
  console.log(error);
});
