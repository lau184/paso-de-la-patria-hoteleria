class ServicioPesca {
    constructor({ id, titulo, slogan, descripcion, imagen, detalles }) {
        this.id = id;
        this.titulo = titulo;
        this.slogan = slogan;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.detalles = detalles || [];
    }
}

module.exports = ServicioPesca;
