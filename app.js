document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("add");
    let lista = document.getElementById("task-list");
    let inputTexto = document.getElementById("texto");

    function addTask() {
        let tarea = inputTexto.value.trim();
        
        if (tarea !== "") { 
            let nuevoItem = document.createElement("li");
            nuevoItem.className = "list-group-item d-flex align-items-center";
            nuevoItem.style.margin = "3px 0"; // Margen arriba y abajo de 3px

            let guion = document.createElement("span");
            guion.textContent = "- ";
            guion.className = "me-2"; // Espacio entre guion y botón

            let btnEliminar = document.createElement("button");
            btnEliminar.className = "btn btn-danger btn-sm me-3"; 
            btnEliminar.textContent = "Borrar";

            let textoTarea = document.createElement("span");
            textoTarea.textContent = tarea;

            btnEliminar.addEventListener("click", function() {
                alert("Tarea Eliminada: " + tarea);
                lista.removeChild(nuevoItem);
            });

            nuevoItem.appendChild(guion);
            nuevoItem.appendChild(btnEliminar); // Botón al inicio
            nuevoItem.appendChild(textoTarea);
            lista.appendChild(nuevoItem);

            inputTexto.value = "";
            inputTexto.focus();
        } else {
            inputTexto.classList.add("is-invalid");
            setTimeout(() => inputTexto.classList.remove("is-invalid"), 1000);
        }
    }

    boton.addEventListener("click", addTask);
    
    inputTexto.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
