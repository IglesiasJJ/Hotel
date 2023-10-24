class Reserva {
    constructor(nombreCliente, apellidoCliente, telefonoCliente, fechaInicio, fechaFinal, numPersonas) {
      this.id = Date.now().toString();
      this.nombreCliente = nombreCliente;
      this.apellidoCliente = apellidoCliente;
      this.telefonoCliente = telefonoCliente;
      this.fechaInicio = fechaInicio;
      this.fechaFinal = fechaFinal;
      this.numPersonas = numPersonas;
    }
  }
  
  module.exports = Reserva;