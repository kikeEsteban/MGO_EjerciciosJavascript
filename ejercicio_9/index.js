const topics = ["JavaScript", "Variables", "funciones", "condicionales", "bucles"];

console.log("Pon en mayúscula el array")
console.log(topics)

const topicsReversedUpperCase = topics.map((element)=>{
    return element.toUpperCase()
}).reverse()
console.log(topicsReversedUpperCase)
