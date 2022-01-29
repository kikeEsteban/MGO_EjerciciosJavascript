
const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre" ];

const selection = meses.filter(elemento => {
    return elemento.length > 7
})
const result = selection.map(elemento => {
    return elemento.toUpperCase()
})
const numOfResult = result.length

console.log("El array resultando")
console.log(result)
console.log("Número de resultados")
console.log(numOfResult)

