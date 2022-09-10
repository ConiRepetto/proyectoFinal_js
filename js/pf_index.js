
/*Clase constructora de los distintos platos del menu*/
class Platos {
    constructor(nombre, precio, ingredientes, esVegetariano, esVegano) {
        this.nombre = nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.esVegetariano = esVegetariano;
        this.esVegano = esVegano;
    }
}

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


/*Arrays de cada restaurante conteniendo su menu*/
let raicesM = []
let madriM = []
let atilanoM = []

/*Para agregar los platos*/
const producto1 = new Platos("Milanesa", 1500, 'ternera, pan rallado, huevo', false, false);
const producto2 = new Platos("papas fritas", 500, 'papas', true, true);
const producto3 = new Platos("pure", 500, 'papa, leche, manteca', true, false);
const producto4 = new Platos("sorrentinos", 1500, 'calabaza, mozarella', true, false);

/*Agrego los platos al restaurante*/
raicesM.push(producto1, producto2, producto3,producto4)

/*Funcion para agregar los platos dinamicamente desde la pagina. Pedir codigo de producto tambien*/
function agregarPlato(){
    let nombreNuevo = prompt('Ingrese nombre del nuevo Plato');
    let precioNuevo = parseInt(prompt('Ingrese el precio: $'));
    let ingredientesNuevo = prompt('Ingrese los Ingredientes:');
    let vegetarianoNuevo = confirm('Este plato es vegetariano?');
    let veganoNuevo = confirm('Este platoe s vegano?');
    nuevoProd = new Platos(nombreNuevo,precioNuevo,ingredientesNuevo,vegetarianoNuevo,veganoNuevo)
    raicesM.push(nuevoProd)
    console.table(raicesM)
}

/*Buscar (filtrar) los platos vegetarianos del menu 36:40*/
function verVegetarianos(){
    let vegetarianos = raices.filter(Platos=>Platos.esVegetariano == true)
    console.table(vegetarianos)
}


/*Lista de mesas disponibles */
let mesa1 = []
let mesa2 = []

/*Funcion para tomar los pedidos de cada mesa, deberia poder `pasar el numero de mesa por parametro, sino una funcion por cada mesa*/
function pedidoMesa1(){
    let productos = []
    while (productos != 'listo'){
        productos = productos.push(prompt('Ingresa un plato:'))
    }
    mesa1.push(productos)
    console.table(mesa1)
}


