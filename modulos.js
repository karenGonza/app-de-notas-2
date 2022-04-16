let fs = require("fs");

module.exports = listaDeFunciones = {
    leerJSON: function() {
        return JSON.parse(fs.readFileSync("./tareas.json", "utf-8"));
    },
    escribirJSON: function(info) {
        let nuevoJSON = JSON.stringify(info); 
        fs.writeFileSync("./tareas.json", nuevoJSON, "utf-8"); 
    },
    guardarTarea: function(titulo, estado) {
        let tareasCreadas = listaDeFunciones.leerJSON(); 
        
        let nuevaTarea = {
            titulo: titulo, 
            estado: estado 
        }
        tareasCreadas.push(nuevaTarea); 
        
        listaDeFunciones.escribirJSON(tareasCreadas); 
    },
    filtrarPorEstado: function(estado) {
        let tareas = listaDeFunciones.leerJSON(); 
        
        let tareasFiltradas = []; 
        
        for (let i = 0; i < tareas.length; i++) { 
            if(tareas[i].estado == estado) { 
                tareasFiltradas.push(tareas[i]) 
            }
        }
        
        return tareasFiltradas; 
    }
}

module.exports = listaDeFunciones;