const express = require('express');
const { body } = require('express-validator');
const { registrarCliente } = require('../Controller/clientesController');
const router = express.Router();

router.post('/clientes', [ //EL ENDPOINT ES /clientes
  body('cedula').notEmpty().withMessage('La cédula es obligatoria'),
  body('nombre').notEmpty().withMessage('El nombre es obligatorio')
], registrarCliente);

module.exports = router;