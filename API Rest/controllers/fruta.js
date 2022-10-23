'use strict'

function pruebas(req, res){
  res.status(200).send({
    message: 'Esta ruta es de prueba en la API RESTful con MongoDB y NodeJS'
  });
};

module.exports = {
  pruebas
};
