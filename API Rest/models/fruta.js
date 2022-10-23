'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FrutaSchema = Schema({
  nombre: String,
  color: String,
  temporada: Boolean,
  peso: Number
});

module.exports = mongoose.model('Fruta', FrutaSchema);
