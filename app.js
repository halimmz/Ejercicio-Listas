document.addEventListener("DOMContentLoaded", function() {
    let boton = document.getElementById("add");
    let lista = document.getElementById("task-list");
    let inputTexto = document.getElementById("texto");

    function addTask() {
        let tarea = inputTexto.value.trim();
        
        if (tarea !== "") { 
            let nuevoItem = document.createElement("li");
            nuevoItem.className = "list-group-item";

            let punto = document.createElement("span");
            punto.textContent = "•";
            punto.className = "punto"; // Aplicamos la clase CSS

            let btnEliminar = document.createElement("button");
            btnEliminar.className = "btn btn-danger btn-sm"; 
            btnEliminar.textContent = "Borrar";

            let textoTarea = document.createElement("span");
            textoTarea.textContent = tarea;

            btnEliminar.addEventListener("click", function() {
                alert("Tarea Eliminada: " + tarea);
                lista.removeChild(nuevoItem);
            });

            nuevoItem.appendChild(punto);
            nuevoItem.appendChild(btnEliminar);
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
