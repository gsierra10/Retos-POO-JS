const Password = class {
    constructor(contraseña, longitud = 8){
        this.contraseña = contraseña
        this.longitud = longitud
    }

    let password = new Password (() => {
        return Math.random() * (8 - 1) + 1;
    })

}
