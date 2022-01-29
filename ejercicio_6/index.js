const notas = [6, 7, 2, 9, 3, 4, 5, 8, 2];

let total = 0;
for(let i=0; i < notas.length; i++){
    total += notas[i];
}

console.log("Total:", total)

total = 0;
for(const nota of notas){
    total += nota
}

console.log("De nuevo, total:", total)