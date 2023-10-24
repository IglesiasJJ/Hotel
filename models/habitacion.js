class Habitacion {
    constructor(nombre, foto, descripcion, precioPorNoche) {
      this.id = Date.now().toString();
      this.nombre = nombre;
      this.foto = foto;
      this.descripcion = descripcion;
      this.precioPorNoche = precioPorNoche;
    }
  }
  
  module.exports = Habitacion;  