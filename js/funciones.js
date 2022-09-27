/* Agregar las opciones al HTML */
const cargarPresupuesto = (select, array) => {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        })
    } else {
        console.error("No existen elementos en el array.")
    }
}
cargarPresupuesto(comida, datosComidas) /* pasa comida como la variable conectada al elemento HTML del Select y el Array datosComidas */
cargarPresupuesto(ubicacion, datosUbicacion)

/* Corrobora que se hayan completado todos los datos que se piden para hacer el presupuesto */
const datosCompletos = () => {
    if (comida.value !== "..." && ubicacion.value !== "..." && parseInt(comensales.value) && comensales.value >= 2 && comensales.value <= 30) {
        return true
    } else {
        return false
    }
}

/*toma todos los datos que se pasan por HTML y crea un nuevo objeto*/
const realizarCotizacion = () => {
    //debugger
    if (datosCompletos()) {
        const presupuesto = new Cotizador(comida.value, ubicacion.value, comensales.value, /*vegetariano, vegano, */ CostoBase)
        //presupuesto.esVegetariano()
        //presupuesto.esVegano()
        importe.innerText = presupuesto.cotizar() //llama al metodo cotizar dentro del objeto presupuesto recien creado
    } else {
        alert("⛔ Completa todos los datos solicitados.")
    }
}

/* Toma los datos guardados en los elementos HTML select/ input y crea un nuevo objeto que se guarda en LOCAL STORAGE */
const enviarPorEmail = () => {
    debugger
    if (datosCompletos()) {
        const cotizacion = {
            fechaCotizacion: new Date().toLocaleString(),
            comida: comida[comida.selectedIndex].text,
            ubicacion: ubicacion[ubicacion.selectedIndex].text,
            comensales: comensales.value,
            costoServicio: importe.innerText
        }
        localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
        alert("✅ Cotización enviada. ¡Muchas gracias por elegirnos!")
    } else {
        alert("Primero completa todos los datos solicitados.") //si no se completaron los datos no corre el codigo
    }

    btnEnviar.classList.add("ocultar")
}

/* llamo a las funciones anteriores con los botones del HTML */
btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)