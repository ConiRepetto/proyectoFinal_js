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

const alertaGenerico = (icono, texto) => {
    Swal.fire({
        icon: icono,
        title: texto,
    })
}

const emailAlert = () => {

    Swal.fire({
    title: 'Ingresa tu email',
    input: 'email',
    inputPlaceholder: 'ejemplo@tumail.com.ar',
    inputLabel: 'Aqui te enviaremos tu cotizcion',
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Enviar',
    showLoaderOnConfirm: true,
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            icon: 'success',
            title: 'Cotizacion Enviada!',
            text: 'Muchas gracias por elegirnos!',
        })
    }
})
    if (email) {
        Swal.fire(`Entered email: ${email}`)
    }
}

const errorInputAlert = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Primero completa todos los datos solicitados',
    })
}

/*toma todos los datos que se pasan por HTML y crea un nuevo objeto*/
const realizarCotizacion = (e) => {
    e.preventDefault()
    //debugger
    if (datosCompletos()) {
        const presupuesto = new Cotizador(comida.value, ubicacion.value, comensales.value, vegetariano, vegano, CostoBase)
        presupuesto.esVegetariano()
        presupuesto.esVegano()
        importe.innerText = `$ ${presupuesto.cotizar()}` //llama al metodo cotizar dentro del objeto presupuesto recien creado
    } else {
        errorInputAlert()
    }
}

/* Toma los datos guardados en los elementos HTML select/ input y crea un nuevo objeto que se guarda en LOCAL STORAGE */
const enviarPorEmail = (e) => {
    e.preventDefault()
    //debugger
    if (datosCompletos()) {
        const cotizacion = {
            fechaCotizacion: new Date().toLocaleString(),
            comida: comida[comida.selectedIndex].text,
            ubicacion: ubicacion[ubicacion.selectedIndex].text,
            comensales: comensales.value,
            costoServicio: importe.innerText
        }
        localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
        emailAlert()
        enviadoAlert()
    } else {
        errorInputAlert() //si no se completaron los datos no corre el codigo
    }

    btnEnviar.classList.add("ocultar")
}



/* llamo a las funciones anteriores con los botones del HTML */
btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)