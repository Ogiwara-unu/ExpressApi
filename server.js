const express = require('express');
const sequelize = require('./config/database');
const clientesRoutes = require('./Routes/clientesRoutes'); 

const app = express();

// Middleware para hacer parse a JSON
app.use(express.json());


app.use('/api', clientesRoutes);

// DEPURACION :V
sequelize.authenticate()
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error al conectar:', err));

sequelize.sync({ force: true })
  .then(() => console.log('Base de datos sincronizada'))
  .catch(err => console.error('Error al sincronizar:', err));

// PUERTO DE EJECUCION DE LA APP
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
