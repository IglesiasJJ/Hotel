const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const reservasRoutes = require('./routes/reservas');
const habitacionesRoutes = require('./routes/habitaciones');

app.use(bodyParser.json());

app.use('/reservas', reservasRoutes);
app.use('/habitaciones', habitacionesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});