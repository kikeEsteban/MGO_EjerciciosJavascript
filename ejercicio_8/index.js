const input = prompt("Escribe una frase y te diré si está en mayúsculas, minúscula o una mezcla.")
if(input === input.toLowerCase()){
    alert("La frase está escrita sólo en minúsculas")
} else if(input === input.toUpperCase()) {
    alert("La frase está escrita sólo en mayúsculas")
} else {
    alert("La frase es una mezcla de minúsculas y mayúsculas")
}