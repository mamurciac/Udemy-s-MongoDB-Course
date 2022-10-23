'use strict'

var Fruta = require('../models/fruta');

function pruebas(req, res){
  res.status(200).send({
    message: 'Esta ruta es de prueba en la API RESTful con MongoDB y NodeJS'
  });
};

function saveFruta(req, res){
  var fruta = new Fruta();
  var params = req.body;

  if(params.nombre){
    fruta.nombre = params.nombre;

    if(params.color){
      fruta.color = params.color;
    }
    if(params.temporada){
      fruta.temporada = params.temporada;
    }
    if(params.peso){
      fruta.peso = params.peso;
    }

    fruta.save((error, frutaStored) => {
      if(error){
        res.status(500).send({
          message: error
        });
      }else{
        if(frutaStored){
          res.status(200).send({
            fruta: frutaStored
          });
        }else{
          res.status(200).send({
            message: 'No se ha guardado la fruta'
          });
        }
      }
    });
  }else{
    res.status(200).send({
      message: 'El nombre de la fruta es obligatorio'
    });
  }
};

function getFrutas(req, res){
  Fruta.find({}).sort({'_id': 1}).exec((error, frutas) => {
    if(error){
      res.status(500).send({
        message: error
      });
    }else{
      if(frutas){
        res.status(200).send({
          frutas
        });
      }else{
        res.status(404).send({
          message: 'No hay frutas'
        });
      }
    }
  });
};

module.exports = {
  pruebas,
  saveFruta,
  getFrutas
};
