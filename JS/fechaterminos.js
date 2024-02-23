// Fecha actualizada automaticamente 
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const fechaActual = today.toLocaleDateString('es-ES', options);

// Muestra la fecha en el párrafo con el ID "fecha"
document.getElementById('fecha').textContent = `Fecha de vigencia: ${fechaActual}`;
