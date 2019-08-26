interface Enemigo {
    readonly tamano: number,
    vida: number,
    rango: number,
    readonly dano: number
}
let tanque: Enemigo={
    tamano: 50,
    vida: 100,
    rango: 60,
    dano: 12
}
tanque.vida= 95;