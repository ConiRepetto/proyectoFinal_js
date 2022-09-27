/* Clase constructora del objeto conteniendo los datos para pasar el presupuesto */
class Cotizador {
    constructor(factorComida, factorUbicacion, comensales, /*esVege, esVega, */ costoBase) {

        this.factorCom = parseFloat(factorComida)
        this.factorUb = parseFloat(factorUbicacion)
        this.comensales = parseInt(comensales)
        //this.esVege = esVege
        //this.esVege = esVega
        this.costoBase = parseFloat(costoBase)
    }
    /*esVegetariano() {
        if (vegetariano.checked) {
            this.esVege = true
        } else {
            this.esVege = false
        }
        vegetariano ? esVege = 1.02 : esVege = 1 // /* Cambiar valor de VEGETARIANO/VEGANO dependiendo si es true o false o sea si esta checked o no 
    };*/
    /*esVegano() {
        if (vegano.checked) { //elemento html esta chekeado
            this.esVega = true
        } else {
            this.esVega = false
        }
        vegano ? esVega = 1.04 : esVega = 1
    };*/
    cotizar() {
        let resultado = (this.factorCom * this.factorUb * this.comensales * /* this.esVege * esVega * */ this.costoBase)
        return resultado.toFixed(2)
    }
}
