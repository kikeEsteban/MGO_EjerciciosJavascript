const data = ["hola", 2, 5, "adios"];

const numbers = data.filter(element => {
    return !isNaN(element)
});
console.log("Números encontrados");
console.log(numbers);
const maxNumber = Math.max(...numbers);
console.log("Máximo de los números encontrados:", maxNumber);
if(numbers.length >= 2){
    console.log("Opreadores numéricos aplicados a los primeros dos números encontrados:")
    console.log(`Suma ${numbers[0]} + ${numbers[1]} = ${numbers[0] + numbers[1]}`)
    console.log(`Resta ${numbers[0]} - ${numbers[1]} = ${numbers[0] - numbers[1]}`)
    console.log(`Multiplicación ${numbers[0]} x ${numbers[1]} = ${numbers[0] * numbers[1]}`)
    console.log(`División ${numbers[0]} / ${numbers[1]} = ${numbers[0] / numbers[1]}`)
    console.log(`Resto ${numbers[0]} % ${numbers[1]} = ${numbers[0] % numbers[1]}`)
}