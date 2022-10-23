'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar CORS

//Rutas
app.get('/pruebasApi', (req, res) => {
  res.status(200).send({
    message: 'Esta ruta es de prueba en la API RESTful con MongoDB y NodeJS'
  });
});



module.exports = app;
