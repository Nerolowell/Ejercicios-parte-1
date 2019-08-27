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
    function Persona(elNombre) {
        this.nombre = elNombre;
    }
    Persona.prototype.Presentarse = function () {
        console.log("Hola, yo soy " + this.nombre + " :)");
    };
    return Persona;
}());
var Amigo = /** @class */ (function (_super) {
    __extends(Amigo, _super);
    function Amigo(name, aniosConocido) {
        var _this = _super.call(this, name) || this;
        _this.aniosConocido = aniosConocido;
        return _this;
    }
    Amigo.prototype.tiempoConocido = function () {
        console.log("Hemos sido amigos por " + this.aniosConocido + " años :)");
    };
    return Amigo;
}(Persona));
var amigoA = new Amigo("Jacobo", 6);
amigoA.Presentarse();
amigoA.tiempoConocido();
