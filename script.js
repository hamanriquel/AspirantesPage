function updateDateTime() {
    var now = new Date();
    var date = now.toLocaleDateString('es-ES', {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'});
    var time = now.toLocaleTimeString('es-ES');
    var datetime = date + ' - ' + time;
    document.getElementById('datetime').textContent = datetime;
}

// Actualiza la hora y la fecha cada segundo
setInterval(updateDateTime, 1000);

// Llama a la función para mostrar la hora y la fecha inicialmente
updateDateTime();
