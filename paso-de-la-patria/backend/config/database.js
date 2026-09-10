const Alojamiento = require('../models/Alojamiento');
const ServicioPesca = require('../models/ServicioPesca');

const alojamientosDB = [
    new Alojamiento({
        id: "1",
        titulo: "La Casa del Paraná",
        slogan: "Descanso y comodidad frente al río",
        descripcion: "Siente la paz al lado del Paraná. Casa equipada con piscina, quincho con parrilla, parque amplio y aire acondicionado en todos los dormitorios.",
        capacidad: "Hasta 8 personas",
        servicios: ["Piscina privada", "Quincho con Parrilla", "Cochera para lanchas", "Wi-Fi & TV"],
        imagen: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
        etiqueta: "Descanso Asegurado",
        whatsappMsg: "Hola! Quisiera consultar disponibilidad para La Casa del Paraná."
    }),
    new Alojamiento({
        id: "2",
        titulo: "Cabaña El Dorado",
        slogan: "Ubicación estratégica para pescadores",
        descripcion: "A pocos metros de las playas y bajadas de lanchas. Ideal para grupos de pesca y familias que buscan tranquilidad.",
        capacidad: "Hasta 5 personas",
        servicios: ["Garage cubierto", "Parrilla techada", "Seguridad 24hs", "Aire Frío/Calor"],
        imagen: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        etiqueta: "Cerca del Río",
        whatsappMsg: "Hola! Quisiera consultar fechas disponibles para Cabaña El Dorado."
    })
];

const serviciosPescaDB = [
    new ServicioPesca({
        id: "p1",
        titulo: "Guiados de Pesca Embarcada",
        slogan: "Aventura Garantizada",
        descripcion: "Viví la emoción de capturar las especies más codiciadas del Río Paraná con guías profesionales nativos.",
        imagen: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        detalles: ["Pesca de Dorado, Surubí y Pacú", "Lanchas modernas con tracking", "Guías experimentados"]
    })
];

module.exports = {
    alojamientosDB,
    serviciosPescaDB
};
