'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

mongoose.connect('mongodb://localhost:27017/cursoMongoUdemy')
.then(() => {
  console.log('La conexión se ha realizado correctamente');

  app.listen(port, () => {
console.log('El servidor está corriendo en localhost:3800');
  });
}).catch(error => {
  console.log(error);
});
