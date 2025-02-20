document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("add");
    let lista = document.getElementById("task-list");
    let inputTexto = document.getElementById("texto");

    function addTask() {
        if (inputTexto.value.trim() !== "") { 
            let nuevoItem = document.createElement("li");
            nuevoItem.className = "list-group-item d-flex align-items-center gap-2 my-1"; // Menos separación
            nuevoItem.style.listStyleType = "disc"; // Mantener los puntos de la lista

            let btnEliminar = document.createElement("button");
            btnEliminar.className = "btn btn-primary btn-sm"; // No se usa float-start para evitar problemas
            btnEliminar.textContent = "Borrar";
            
            btnEliminar.addEventListener("click", function() {
                lista.removeChild(nuevoItem);
                alert("Tarea Eliminada: " + textoTarea.textContent);
            });

            let textoTarea = document.createElement("span");
            textoTarea.textContent = inputTexto.value;

            nuevoItem.appendChild(btnEliminar);
            nuevoItem.appendChild(textoTarea);
            lista.appendChild(nuevoItem);

            inputTexto.value = "";
            inputTexto.focus();
        }
    }

    boton.addEventListener("click", addTask);
    
    inputTexto.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
