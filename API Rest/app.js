'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//Cargar rutas
var fruta_routes = require('./routes/fruta');

//Body Parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Configurar CORS

//Rutas
app.use('/api', fruta_routes);


module.exports = app;
