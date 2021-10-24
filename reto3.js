const letras = ['A','B','C','D','E','F']
const colores = ['blanco', 'negro', 'azul', 'gris', 'rojo']
const precio = {
    'A' : 100,
    'B' : 80,
    'C' : 60,
    'D' : 50,
    'E' : 30,
    'F' : 10
}
//Clase Padre Electrodomestico se pueden heredar los atributos//
class Electrodomestico {
    consumoEnergetico;
    peso;
    precioBase;
    color;
    constructor(){
        this.consumoEnergetico = 'F',
        this.peso = 5,
        this.color = 'blanco',
        this.precioBase = 100
    }
    get precioBase(){
        return this.precioBase;
    }
    set precioBase(precioBase1){
        this.precioBase = precioBase1
    }
    get color(){
        return this.color;
    }
    set color(color1){
        this.color = color1;
    }
    get consumoEnergetico(){
        return this.consumoEnergetico;
    }
    set consumoEnergetico(consumoEnergetico1){
        this.consumoEnergetico = consumoEnergetico1
    }
    get peso(){
        return this.precio;
    }
    set peso(peso1){
        this.peso = peso1
    }
}

const electrodomestico = new Electrodomestico();

class Lavadora extends Electrodomestico {
    carga;
    constructor(carga = 5, color, consumoEnergetico, precioBase, peso){        
        super(precioBase, color, consumoEnergetico, peso);        
        this.carga = carga;
    }
    get carga(){        
        return this.carga = carga;    
    }
    set carga(carga1){
        this.carga = carga1
    }
    precioFinal(){
        if (this.carga > 30) {
            this.precioBase += 50;
        }
    }
}

const lavadora = new Lavadora(35);
const lavadora1 = new Lavadora();
lavadora.precioFinal();
/*
console.log(lavadora1);
console.log(lavadora);
*/
class Television extends Electrodomestico {
    resolucion;
    cuatroK;
    constructor(resolucion = 20 , cuatroK = false, precioBase, color, consumoEnergetico, peso){
        super(precioBase, color, consumoEnergetico, peso);
        this.resolucion = resolucion
        this.cuatroK = cuatroK
    }
    get resolucion(){
        return this.resolucion
    }
    set resolucion(resolucion1){
        this.resolucion = resolucion1;
    }
    get cuatroK(){
        return this.cuatroK;
    }
    set cuatroK(cuatroK1){
        this.cuatroK = cuatroK1
    }
    precioFinal(){
        if (this.resolucion > 40) {
            this.precioBase += this.precioBase * 0.3; 
        }
        if (this.cuatroK) {
            this.precioBase += 50;
        }
    }
}


const television = new Television();
const television1 = new Television(25, true);
television1.precioFinal();
const television2 = new Television(42);
television2.precioFinal();
const television3 = new Television(55, true);
television3.precioFinal();
/*
console.log(television3)
console.log(television)
*/
class mainApp{
    electrodomesticos;
    constructor(){
        this.electrodomesticos = [television2, lavadora1];
    }

    precioFinal(){
        let finalPrice = 0
        for (let index = 0; index < this.electrodomesticos.length; index++) {
            const element = this.electrodomesticos[index];
            console.log('electrodomestico', element.precioBase);
            finalPrice += element.precioBase;
        }
        console.log('precio final : ', finalPrice);
    }
}

const newApp = new mainApp()
newApp.precioFinal();

