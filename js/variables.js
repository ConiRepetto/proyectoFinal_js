//CONEXION CON EL DOM JS
const comida = document.querySelector("#comida")
const ubicacion = document.querySelector("#ubicacion")
const comensales = document.querySelector("#comensales")
const vegetariano = document.querySelector(".inputVegetariano")
const vegano = document.querySelector(".inputVegano")
const btnCotizar = document.querySelector(".btnCotizar")
const importe = document.querySelector(".importe")
const btnEnviar = document.querySelector(".btnEnviar")

//BASE DE DATOS FICTICIA 
const datosComidas = [{tipo: 'Almuerzo', factor: 1.10},
                        {tipo: 'Merienda', factor: 1.05},
                        {tipo: 'Cena', factor: 1.20},]

const datosUbicacion = [{tipo: 'CABA', factor: 1.10},
                        {tipo: 'AMBA', factor: 1.20},
                        {tipo: 'GBA', factor: 1.30},
                        {tipo: 'Cordoba', factor: 1.20},]

/* Cambiar valor de VEGETARIANO/VEGANO dependiendo si es true o false o sea si esta checked o no */
let esVegetariano = 0
vegetariano ? esVegetariano = 1.02 : esVegetariano = 1
let esVegano = 0
vegetariano ? esVegano = 1.04 : esVegano = 1

const CostoBase = 5000