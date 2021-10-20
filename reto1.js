const Persona = class {
    constructor(nombre, edad, DNI, peso, altura){
    this.nombre = nombre
    this.edad = edad
    this.DNI = DNI
    this.peso = peso
    this.altura = altura
    this.sexo = 'H'
    }
}

let pers1 = new Persona('Gustavo', 21, '21768738C', 95, 1.85)
let pers2 = new Persona('Valentina', 23, 'Y5599685Z', 60, 1.58, 'M')
let pers3 = new Persona('Diego', 22, '12345678X', 72, 1.75)

console.log(pers1)
console.log(pers2)
console.log(pers3)