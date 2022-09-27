const cargarPresupuesto = (select, array)=> {
    if (array.length > 0) {
        array.forEach(elemento => {
            select.innerHTML += `<option value="${elemento.factor}">${elemento.tipo}</option>`
        })
    } else {
        console.error("No existen elementos en el array.")
    }
}
cargarPresupuesto(comida, datosComidas)
cargarPresupuesto(ubicacion, datosUbicacion)

const datosCompletos = ()=> {
    if (comida.value !== "..." && ubicacion.value !== "..." && parseInt(comensales.value) && comensales.value >= 2 && comensales.value <= 30) {
        return true
    } else {
        return false
    }
}

const realizarCotizacion = ()=> {
    debugger
    if (datosCompletos()) {
        const presupuesto = new Cotizador(comida.value, ubicacion.value, comensales.value, vegetariano, vegano, CostoBase)
            importe.innerText = presupuesto.cotizar() //llama al metodo cotizar dentro del objeto presupuesto recien creado
        
    } else {
        alert("⛔ Completa todos los valores solicitados.")
    }
}

const enviarPorEmail = ()=> {
    debugger

    const cotizacion = {
        fechaCotizacion: new Date().toLocaleString(),
        comida: comida[comida.selectedIndex].text,
        ubicacion: ubicacion[ubicacion.selectedIndex].text,
        comensales: comensales.value,
        costoServicio: importe.innerText
    }
    localStorage.setItem("UltimaCotizacion", JSON.stringify(cotizacion))
    alert("✅ Cotización enviada. ¡Muchas gracias por elegirnos!")
    btnEnviar.classList.add("ocultar")
}

btnCotizar.addEventListener("click", realizarCotizacion)
btnEnviar.addEventListener("click", enviarPorEmail)
