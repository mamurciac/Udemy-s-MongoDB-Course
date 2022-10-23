'use strict'

var express = require('express');
var FrutaController = require('../controllers/fruta');

var api = express.Router();

api.get('/pruebas', FrutaController.pruebas);

module.exports = api;
