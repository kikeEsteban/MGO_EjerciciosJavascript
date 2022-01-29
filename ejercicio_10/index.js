const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
console.log("Array de números")
console.log(number)
const impares = number.filter(elemento => {
    return elemento % 2 == 1
})
const pares = number.filter(elemento => {
    return elemento % 2 == 0
})
console.log("Impares")
console.log(impares)
console.log("Pares")
console.log(pares)

