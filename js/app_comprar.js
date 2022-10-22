const contenedor = document.querySelector(".containerCompras")
const URL = '../base_datos/productos.json'
const carrito = []
let productosMenu = []
let contenidoHTML = ""

// const cartelError = () => {
//     return `<div class="card text-white bg-danger col-lg-6">
//                 <div class="card-header">Ups...!</div>
//                 <div class="card-body">
//                     <h5 class="card-title">No pudimos cargar los productos.</h5>
//                     <p class="card-text">Actualiza el sitio o intenta de nuevo en unos minutos. </p>
//                 </div>
//             </div>`
// }

const mostrarCard = (contenido) => {
    const {
        id,
        nombre,
        ingredientes,
        categoria,
        imagen
    } = contenido
    return  `<div class="cardContainer col-lg-4 col-md-6 col-sm-12 ">
                <div class="card">
                    <img id="${id}" src="${imagen}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title" title="${nombre}">${nombre}</h5>
                        <p class="card-text ingredientes">${ingredientes}</p>
                        <p class="card-text categoria">${categoria}</p>
                        <a href="#" id="${id}" class="btn btn-primary btnAgregar">AGREGAR</a>
                    </div>
                </div>
                </div>
            `
}

const cargarContenido = async () => {
    try {
        const response = await fetch(URL)
        const data = await response.json() //convierte a una estructura de json
        //console.table(data)
        productosMenu = data
        productosMenu.forEach(element => {
            contenidoHTML += mostrarCard(element)
        });
    } catch (error) {
        contenidoHTML += cartelError()
    } finally {
        contenedor.innerHTML = contenidoHTML
    }

}
// cargarContenido()

document.addEventListener("DOMContentLoaded", async () => {
    const espero = await cargarContenido()
    activarClicks()
})
const activarClicks = () => {
    let botones = document.querySelectorAll(".btnAgregar")
    botones.forEach(boton => boton.addEventListener("click", (e) => agregarAlCarrito(e)))
    // let imagenes = document.querySelectorAll(".card img") //para ver detalle del producto haciendo clic en la imagen
    // imagenes.forEach(imagen => imagen.addEventListener("click", (e) => verDetalle(e.target.id)))
}

const agregarAlCarrito = (event) => {
    let item = productosMenu.find(etiqueta => etiqueta.id === parseInt(event.target.id))
    item !== undefined && carrito.push(item)
    console.clear()
    console.table(carrito)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}