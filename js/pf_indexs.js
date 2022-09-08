
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

/*Arrays de cada restaurante conteniendo su menu*/
let raices = []
let elPreferido = []
let atilano = []

/*Para agregar los platos*/
const producto1 = new Platos("Milanesa", 1500, 'ternera, pan rallado, huevo', false, false);
const producto2 = new Platos("papas fritas", 500, 'papas', true, true);
const producto3 = new Platos("pure", 500, 'papa, leche, manteca', true, false);
const producto4 = new Platos("sorrentinos", 1500, 'calabaza, mozarella', true, false);

/*Agrego los platos al restaurante*/
raices.push(producto1, producto2, producto3,producto4)

/*Funcion para agregar los platos dinamicamente desde la pagina. Pedir codigo de producto tambien*/
function agregarPlato(){
    let nombreNuevo = prompt('Ingrese nombre del nuevo Plato');
    let precioNuevo = parseInt(prompt('Ingrese el precio: $'));
    let ingredientesNuevo = prompt('Ingrese los Ingredientes:');
    let vegetarianoNuevo = confirm('Este plato es vegetariano?');
    let veganoNuevo = confirm('Este platoe s vegano?');
    nuevoProd = new Platos(nombreNuevo,precioNuevo,ingredientesNuevo,vegetarianoNuevo,veganoNuevo)
    raices.push(nuevoProd)
    console.table(raices)
}

/*Buscar (filtrar) los platos vegetarianos del menu 36:40*/
let vegetarianos = raices.filter(platos=>plato.esVegetariano == true)
console.log(vegetarianos)


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


