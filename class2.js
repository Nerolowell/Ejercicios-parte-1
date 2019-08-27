var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(elNombre, laEdad) {
        this.nombre = elNombre;
        this.age = laEdad;
    }
    Persona.prototype.Presentarse = function () {
        console.log("Hola, yo soy " + this.nombre + " :)");
    };
    return Persona;
}());
var Amigo = /** @class */ (function (_super) {
    __extends(Amigo, _super);
    function Amigo(name, age, aniosConocido) {
        var _this = _super.call(this, name, age) || this;
        _this.aniosConocido = aniosConocido;
        return _this;
    }
    Amigo.prototype.tiempoConocido = function () {
        console.log("Hemos sido amigos por " + this.aniosConocido + " años :)");
    };
    Amigo.prototype.amigosDesde = function () {
        var primerAnio = this.age - this.aniosConocido;
        console.log("Hemos sido amigos desde que yo ten\u00EDa " + primerAnio + " a\u00F1os ");
    };
    return Amigo;
}(Persona));
var amigoA = new Amigo("William", 19, 8);
amigoA.amigosDesde();
