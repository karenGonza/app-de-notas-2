let fs = require('fs');

function leerJSON() { 
    return JSON.parse(fs.readFileSync("./tareas.json", "utf-8")); 
}

function escribirJSON(info) { 
    fs.writeFileSync("./tareas.json", JSON.stringify(info), "utf-8"); 
}

function guardarTarea(titulo, estado) {
    let tareasCreadas = leerJSON();

    let unaNuevaTarea = { 
        titulo: titulo,
        estado: estado
    }

    tareasCreadas.push(unaNuevaTarea);

    escribirJSON(tareasCreadas); 
}

function filtrarPorEstado(estado) {
    let tareas = leerJSON(); 

    return tareas.filter(tarea => tarea.estado == estado); 
}
module.exports = { leerJSON, escribirJSON, guardarTarea, filtrarPorEstado };
