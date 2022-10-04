/* Clase constructora del objeto conteniendo los datos para pasar el presupuesto */
class Cotizador {
    constructor(factorComida, factorUbicacion, comensales, esVege, esVega, costoBase) {

        this.factorCom = parseFloat(factorComida)
        this.factorUb = parseFloat(factorUbicacion)
        this.comensales = parseInt(comensales)
        this.esVege = esVege
        this.esVega = esVega
        this.costoBase = parseFloat(costoBase)
    }
    esVegetariano() {
        vegetariano ? this.esVege = 1.02 : this.esVege = 1 // /* vegetariano > etiqueta html (dom)Cambiar valor de VEGETARIANO/VEGANO dependiendo si es true o false o sea si esta checked o no 
    };
    esVegano() {
        vegano ? this.esVega = 1.04 : this.esVega = 1
    };
    cotizar() {
        let resultado = (this.factorCom * this.factorUb * this.comensales * this.esVege * this.esVega * this.costoBase)
        return resultado.toFixed(2)
    }
}
