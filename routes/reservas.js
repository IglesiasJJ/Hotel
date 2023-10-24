const express = require('express');
const router = express.Router();
const Reserva = require('../models/reserva.js');
const reservas = [];

router.post('/', (req, res) => {
  const { nombreCliente, apellidoCliente, telefonoCliente, fechaInicio, fechaFinal, numPersonas } = req.body;
  const reserva = new Reserva(nombreCliente, apellidoCliente, telefonoCliente, fechaInicio, fechaFinal, numPersonas);
  reservas.push(reserva);
  res.status(201).json(reserva);
});

router.get('/', (req, res) => {
  res.json(reservas);
});

module.exports = router;
