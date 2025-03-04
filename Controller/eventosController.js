const { v4: uuidv4 } = require('uuid');
const Evento = require('../Models/eventos');
const Cliente = require('../Models/clientes');

exports.registrarEvento = async (req, res) => {
    const { descripcion, cliente_id } = req.body;
    console.log("Cliente ID recibido:", cliente_id); // Depuración
  
    try {
      const cliente = await Cliente.findByPk(cliente_id);
      if (!cliente) {
        console.log("Cliente no encontrado en la BD");
        return res.status(404).json({ msg: 'Cliente no encontrado' });
      }
      
      const codigo = uuidv4();
      const evento = await Evento.create({ codigo, descripcion, cliente_id });
  
      res.status(201).json(evento);
    } catch (error) {
      console.error("Error al registrar evento:", error);
      res.status(500).json({ msg: 'Error del servidor', error });
    }
  };
  

exports.obtenerEventoPorCodigo = async (req, res) => {
  const { codigo } = req.params;
  try {
    const evento = await Evento.findOne({
      where: { codigo },
      include: { model: Cliente, attributes: ['nombre', 'cedula'] }
    });
    if (!evento) {
      return res.status(404).json({ msg: 'Evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ msg: 'Error del servidor', error });
  }
};
