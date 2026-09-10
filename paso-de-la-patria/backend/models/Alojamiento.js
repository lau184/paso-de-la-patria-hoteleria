class Alojamiento {
    constructor({ id, titulo, slogan, descripcion, capacidad, servicios, imagen, etiqueta, whatsappMsg }) {
        this.id = id;
        this.titulo = titulo;
        this.slogan = slogan;
        this.descripcion = descripcion;
        this.capacidad = capacidad;
        this.servicios = servicios || [];
        this.imagen = imagen;
        this.etiqueta = etiqueta;
        this.whatsappMsg = whatsappMsg;
    }
}

module.exports = Alojamiento;
