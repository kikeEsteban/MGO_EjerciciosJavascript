class Cuadrado {
    constructor(lado){
        this.lado = lado;
    }
    lado = 0;
    perimetro(){
        return 4 * this.lado;
    };
    area(){
        return this.lado * this.lado
    }
};

const pequeno = new Cuadrado(2);
const mediano = new Cuadrado(5);
const grande = new Cuadrado(10);

console.log(`Para un cuadrado de lado ${pequeno.lado} cm, el perímetro es ${pequeno.perimetro()} cm y el área es ${pequeno.area()} cm2`)
console.log(`Para un cuadrado de lado ${mediano.lado} cm, el perímetro es ${mediano.perimetro()} cm y el área es ${mediano.area()} cm2`)
console.log(`Para un cuadrado de lado ${grande.lado} cm, el perímetro es ${grande.perimetro()} cm y el área es ${grande.area()} cm2`)