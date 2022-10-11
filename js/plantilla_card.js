const cartelError = () => {
    return `<div class="card text-white bg-danger col-lg-6">
                <div class="card-header">Ups...!</div>
                <div class="card-body">
                    <h5 class="card-title">No pudimos cargar los productos.</h5>
                    <p class="card-text">Actualiza el sitio o intenta de nuevo en unos minutos. </p>
                </div>
            </div>`
}

const mostrarCard = (contenido) => {
    const {
        id,
        nombre,
        ingredientes,
        categoria,
        imagen
    } = contenido
    return  `<div class="card col-lg-3">
                <img id="${id}" src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title" title="${nombre}">${nombre}</h5>
                    <p class="card-text ingredientes">${ingredientes}</p>
                    <p class="card-text categoria">${categoria}</p>
                    <a href="#" id="${id}" class="btn btn-primary btnAgregar">AGREGAR</a>
                </div>
            </div>`
}