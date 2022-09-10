const title = document.getElementById("title"); // Output h1#title: esto dice que el tag html h1 tiene un id 'title'
const parrafo = document.querySelector("#parrafoExtra p");
parrafo.innerText; //ver el nodo texto dentro del tag html
const mesas = document.querySelector(".mesas"); //crea un array con todos los nodos que contengan esa clase
const tablaB = document.getElementById('tablaB')
const parrafos = document.getElementsByTagName("p");

/*Cambiar el texto dentro de un tag html*/
function elementosParagraph() {
    for (elemento of parrafo) {
        //console.log(elemento.innerText)
        elemento.innerText = "cambio total"; //le cambie el texto a todos los tags p. Porque REDEFINO el innertext del elemento que accedi
    }
}

/*Llenar la tabla de todos los restaurantes activos de la app (plantilla > tamplate strings)*/
function agregarFilaHTML() {
    let fila = ''
    debugger
    restaurantesActivos.forEach(Restos => {
        fila = `<tr>                          
                    <th scope="row">${Restos.nombre}</th>
                    <td class="mesas">${Restos.mesas}</td>
                    <td class="mesas">${Restos.mozos}</td>
                    <td class="mesas">${Restos.horario}</td>
                    <td class="mesas">${Restos.capacidad}</td>
                </tr>`; 
                tablaB.innerHTML += fila
    })
    
}

/*Crear elemento HTML */
function crearElementoHTML(){
    const tituloCreado = document.createElement('h2')
    tituloCreado.className = 'subtitle'//para meterle una clase se le dice className porque en JS esta la palabra reservada class
    tituloCreado.innerHTML = 'prueba de texto html desde JS'
    document.body.append(tituloCreado)
}