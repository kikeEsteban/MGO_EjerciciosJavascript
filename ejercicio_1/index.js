const largo = 13;
const ancho = 23;
const alto = 16;
console.log("largo", largo, "cm");
console.log("ancho", ancho, "cm");
console.log("alto", alto, "cm");

// Volumen: largo * ancho * alto 
const volumen = largo * ancho * alto;
console.log('volumen', volumen, "cm3");

// Area total: suma de las areas de todas las caras
const areaBase = ancho * largo;
const areaFrontal = ancho * alto;
const areaLateral = largo * alto;
const areaTotal = 2 * (areaBase + areaFrontal + areaLateral);
console.log("área total", areaTotal);