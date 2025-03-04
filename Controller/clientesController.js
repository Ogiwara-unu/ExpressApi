const { validationResult } = require('express-validator');
const Cliente = require('../Models/clientes');

exports.registrarCliente = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { cedula, nombre } = req.body;

  try {
    let cliente = await Cliente.findOne({ where: { cedula } });

    if (cliente) {
      return res.status(400).json({ msg: 'El cliente ya está registrado' });
    }

    cliente = await Cliente.create({ cedula, nombre });

    console.log('Cliente creado:', cliente);

    res.status(201).json(cliente);
  } catch (error) {
    console.error('Error al registrar cliente:', error);
    res.status(500).json({ msg: 'Error del servidor', error });
  }
};
