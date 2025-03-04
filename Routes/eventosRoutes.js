const express = require('express');
const { body, param } = require('express-validator');
const { registrarEvento, obtenerEventoPorCodigo } = require('../Controller/eventosController');
const router = express.Router();

router.post('/actividades', [
  body('descripcion').notEmpty().withMessage('La descripción es obligatoria'),
  body('cliente_id').isInt().withMessage('El cliente_id debe ser un número entero')
], registrarEvento);

router.get('/actividades/:codigo', [
  param('codigo').notEmpty().withMessage('El código es obligatorio')
], obtenerEventoPorCodigo);

module.exports = router;