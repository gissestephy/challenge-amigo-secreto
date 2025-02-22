let amigos = [];

/* Implementa una función para agregar amigos

Tareas específicas: 
    * Desarrolla una función, que permita al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos creada anteriormente
    * Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario.
    * Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre."
    * Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    * Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
*/

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;

    if (nombreAmigo.trim() === "") { 
        alert("Por favor, inserte un nombre.")
    } else {
        let nombreFormateado = nombreAmigo.charAt(0).toUpperCase() + nombreAmigo.slice(1).toLowerCase();

        amigos.push(nombreFormateado);
        document.querySelector("#amigo").value = "";
        actualizarLista();
    }
}

/* Implementa una función para actualizar la lista de amigos

Tareas específicas:
    * Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
    * Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    * Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    * Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    * Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.
*/

function actualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let index = 0; index < amigos.length; index++){
        const element = amigos[index];

        let li = document.createElement("li");
        li.textContent = element;
        listaAmigos.appendChild(li);
    }
}

/* Implementa una función para sortear los amigos

Tareas específicas:
    * Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
    * Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
    * Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
    * Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
    * Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.
*/

function sortearAmigo() {
  let cantAmigos = amigos.length;
  if (cantAmigos === 0) {
    alert("Por favor, inserte un nombre antes de realizar el sorteo.");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantAmigos);
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "El amigo sorteado es: " + amigos[indiceAmigo];
  }
}