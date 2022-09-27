

class Cotizador {
    constructor(factorComida, factorUbicacion,comensales, esVege, esVega, costoBase) {
        
        this.factorCom = parseFloat(factorComida)
        this.factorUb = parseFloat(factorUbicacion)
        this.comensales = parseInt(comensales)
        this.esVege = esVege
        this.esVege = esVega
        this.costoBase = parseFloat(costoBase)
    }
    esVegetariano(){
        if(vegetariano.checked){
            this.esVege = true
        } else{
            this.esVege = false
        }
    };
    esVegano(){
        if(vegano.checked){
            this.esVega = true
        } else{
            this.esVega = false
        }
    };
    cotizar() {
        let resultado = (this.factorCom * this.factorUb * this.comensales*  this.costoBase)
        return resultado.toFixed(2)   
    }
}
