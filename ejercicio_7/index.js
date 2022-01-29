function esPar(numero){
    return numero % 2 == 0
}

function esImpar(numero) {
    return !esPar(numero)
}

const num = 3
console.log(`El numero ${num} es ${esPar(num) ? "par" : "impar"}`)