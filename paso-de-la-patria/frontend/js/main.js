document.addEventListener('DOMContentLoaded', () => {
    cargarPesca();
    cargarAlojamientos();
});

// Número de teléfono de contacto centralizado
const NUMERO_WHATSAPP = '5493624755016';

async function cargarPesca() {
    const container = document.getElementById('pesca-grid-container');
    try {
        const response = await fetch('/api/pesca');
        const result = await response.json();

        if (result.success && result.data) {
            container.innerHTML = result.data.map(p => `
                <div class="card-item">
                    <div class="card-image">
                        <img src="${p.imagen}" alt="${p.titulo}">
                        <span class="card-badge">${p.slogan}</span>
                    </div>
                    <div class="card-body">
                        <h3>${p.titulo}</h3>
                        <p>${p.descripcion}</p>
                        <div class="card-chips">
                            ${p.detalles.map(d => `<span class="chip">${d}</span>`).join('')}
                        </div>
                        <a href="https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent('Hola! Quisiera información sobre: ' + p.titulo)}" target="_blank" class="btn-oficial" style="text-align:center;">
                            Consultar Guía
                        </a>
                    </div>
                </div>
            `).join('');
        }
    } catch (err) {
        console.log('Error cargando datos de pesca');
    }
}

async function cargarAlojamientos() {
    const container = document.getElementById('alojamientos-grid-container');
    try {
        const response = await fetch('/api/alojamientos');
        const result = await response.json();

        if (result.success && result.data) {
            container.innerHTML = result.data.map(a => {
                const waLink = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(a.whatsappMsg)}`;
                return `
                    <div class="card-item">
                        <div class="card-image">
                            <img src="${a.imagen}" alt="${a.titulo}">
                            <span class="card-badge">${a.etiqueta}</span>
                        </div>
                        <div class="card-body">
                            <h3>${a.titulo}</h3>
                            <p>${a.descripcion}</p>
                            <div class="card-chips">
                                ${a.servicios.map(s => `<span class="chip">${s}</span>`).join('')}
                            </div>
                            <a href="${waLink}" target="_blank" class="btn-oficial" style="text-align:center;">
                                Visitanos / Reservar
                            </a>
                        </div>
                    </div>
                `;
            }).join('');
        }
    } catch (err) {
        console.log('Error cargando datos de alojamientos');
    }
}
