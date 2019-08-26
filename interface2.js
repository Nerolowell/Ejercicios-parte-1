var tanque = {
    tamano: 50,
    vida: 100,
    rango: 60,
    dano: 12
};
tanque.vida = 95;
var golpeTanque = function (nombreTanque, danoHecho) {
    nombreTanque.vida -= danoHecho;
    return nombreTanque.vida;
};
