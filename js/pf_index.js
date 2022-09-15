/*RESTAURANTES*/
/*Clase constructora de los restaurantes que tienen usuario en la app*/
class Restos {
    constructor(nombre, mesas, mozos, horario, capacidad) {
        this.nombre = nombre;
        this.mesas = mesas;
        this.mozos = mozos;
        this.horario = horario;
        this.capacidad = capacidad;
    }
}

/*creo los objetos de Restos*/
const raices = new Restos("Raices", 15, 4, '10 - 00 ', 50);
const madri = new Restos("Madri", 18, 5, '10 - 1 ', 70);
const atilano = new Restos("Atilano", 22, 8, '10 - 2 ', 100);

const restaurantesActivos = []
restaurantesActivos.push(raices, madri, atilano)

/*MENU*/
/*Clase constructora de los distintos platos del menu*/
class Platos {
    constructor(numero, nombre, ingredientes, esVegetariano, esVegano, precio) {
        this.numero = numero;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.esVegetariano = esVegetariano;
        this.esVegano = esVegano;
        this.precio = precio;
    }
}
/*Arrays de cada restaurante conteniendo su menu*/
let raicesM = []
let madriM = []
let atilanoM = []

/*Para agregar los platos*/
const producto1 = new Platos(1, "Milanesa", 'ternera, pan rallado, huevo', false, false, 1500, );
const producto2 = new Platos(2, "papas fritas", 'papas', true, true, 500);
const producto3 = new Platos(3, "pure", 'papa, leche, manteca', true, false, 500);
const producto4 = new Platos(4, "sorrentinos", 'calabaza, mozarella', true, false, 1500);
/*Agrego los platos al menu de un restaurante*/
raicesM.push(producto1, producto2, producto3, producto4)
/*Funcion para agregar los platos dinamicamente desde la pagina. Prompt o por formulario*/
function agregarPlato() {
    let numeroNuevo = prompt('Ingrese numero del nuevo Plato');
    let nombreNuevo = prompt('Ingrese nombre del nuevo Plato');
    let ingredientesNuevo = prompt('Ingrese los Ingredientes:');
    let vegetarianoNuevo = confirm('Este plato es vegetariano?');
    let veganoNuevo = confirm('Este plato es vegano?');
    let precioNuevo = parseInt(prompt('Ingrese el precio: $'));
    nuevoProd = new Platos(numeroNuevo, nombreNuevo, ingredientesNuevo, vegetarianoNuevo, veganoNuevo, precioNuevo)
    raicesM.push(nuevoProd)
    console.table(raicesM)
}

/*Para agregar platos al menu por formulario (inputs)*/
function agregar() {
    const inputNumero = document.querySelector('#inputNumero')
    const inputNombre = document.querySelector('#inputNombre')
    const inputPrecio = document.querySelector('#inputPrecio')
    const inputIngredientes = document.querySelector('#inputIngredientes')
    const inputVegetariano = document.querySelector('#inputVegetariano')
    const inputVegano = document.querySelector('#inputVegano')

    const btnAgregar = document.querySelector('.btnAgregar')
    btnAgregar.addEventListener('click', () => {
        nuevoProd = new Platos(inputNumero, inputNombre, inputIngredientes, inputVegetariano, inputVegano, inputPrecio)
        raicesM.push(nuevoProd)
        console.table(raicesM)
        alert('Plato Agregado al Menu')
    })
    
}


/*Buscar (filtrar) los platos vegetarianos del menu */
function verVegetarianos() {
    let vegetarianos = raices.filter(Platos => Platos.esVegetariano == true)
    console.table(vegetarianos)
}

/*array de todos los inputs dentro de mi document, itero sobre todos y deveulvo el valor de cada uno (despues lo capturo en una variable nueva)*/
const inputs = document.querySelectorAll('input')
inputs.forEach(input => {
    console.log(input.value)
    input.addEventListener('input', () => console.log(input.value))
})

/*Llenar la tabla del menu con todos los platos (plantilla > tamplate strings) LO HACE SOLO, LE SAQUE LA FUNCION*/
const tablaB = document.querySelector('#tablaB')

let fila = ''

raicesM.forEach(Platos => {
    fila = `<tr>                          
                    <th scope="row">${Platos.numero}</th>
                    <td class="nombre">${Platos.nombre}</td>
                    <td class="ingredientes">${Platos.ingredientes}</td>
                    <td class="vegetariano">${Platos.vegetariano}</td>
                    <td class="vegano">${Platos.vegano}</td>
                    <td class="precio">${Platos.precio}</td>
                    <td><button id="btn${Platos.nombre}">+</button></td>
                </tr>`;
    tablaB.innerHTML += fila
})

function agregarFilaHTML() {
    let fila = ''

    raicesM.forEach(Platos => {
        fila = `<tr>                          
                        <th scope="row">${Platos.numero}</th>
                        <td class="nombre">${Platos.nombre}</td>
                        <td class="ingredientes">${Platos.ingredientes}</td>
                        <td class="vegetariano">${Platos.vegetariano}</td>
                        <td class="vegano">${Platos.vegano}</td>
                        <td class="precio">${Platos.precio}</td>
                        <td><button id="btn${Platos.nombre}">+</button></td>
                    </tr>`;
        tablaB.innerHTML += fila
    })

}

const inputBuscarPlato = document.querySelector("#btnBuscarPlato")


function filtrarPlatos() { //FILTRAR PRODUCTOS EN LA TABLA INGRESANDO PARTE DEL NOMBRE
    inputBuscarPlato.value = inputBuscarPlato.value.trim().toUpperCase()
    if (inputBuscarPlato.value !== "") {
        const resultado = raicesM.filter(Platos => Platos.nombre.includes(inputBuscarPlato.value))
        if (resultado.length === 0) {
            console.clear()
            console.warn("No se encontraron platos.")
            agregarFilaHTML(raicesM)
        } else {
            agregarFilaHTML(resultado)
        }
    } else {
        agregarFilaHTML(raicesM)
    }
}

inputBuscarPlato.addEventListener("#btnBuscarPlato", filtrarPlatos) //A medida que escribimos.


/* PEDIDO */
/*Lista de mesas disponibles */
let mesa1 = []
let mesa2 = []

/*Funcion para tomar los pedidos de cada mesa, deberia poder `pasar el numero de mesa por parametro, sino una funcion por cada mesa*/

function btnAgregarPlatoAlPedido() {
    raicesM.forEach(Platos => {
        const btn1 = document.querySelector(`#btn${Platos.nombre}`)
        btn1.addEventListener("click", () => agregarAlPedido(`${Platos.nombre}`))
    })
}

function agregarAlPedido(nombreSelec) {
    const plato = raicesM.find(Platos => Platos.nombre == nombreSelec)
    mesa1.push(plato)
    console.table(mesa1)
    alert('LA PUTA MADRE')
    //localStorage.setItem("mesa1", JSON.stringify(mesa1))
}