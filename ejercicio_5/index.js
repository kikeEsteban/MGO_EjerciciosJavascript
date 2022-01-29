var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numeroDNI = prompt("Introduce el número de DNI")
var letraDNI = prompt("ahora la letra del DNI")

if(numeroDNI > 99999999 || numeroDNI < 0){
    alert("El número de DNI está fuera del rango permitido")
} else {
    const indice = numeroDNI % 23
    const letra = letras[indice]
    if(letra === letraDNI){
        alert("El número y letra del DNI son correctos")
    } else {
        alert("El numero o la letra del DNI no son correctos")
    }
}

