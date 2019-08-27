class Persona {
    private nombre: string ;
    constructor(elNombre: string){
        this.nombre = elNombre;
    }
    Presentarse(){
        console.log("Hola, yo soy "+ this.nombre +" :)");
    }
}
class Amigo extends Persona{
    aniosConocido: number;
    constructor(name: string, aniosConocido:number){
        super(name);
        this.aniosConocido=aniosConocido;
    }
    tiempoConocido(){
        console.log("Hemos sido amigos por "+this.aniosConocido+ " años :)")
    }
}
let amigoA=new Amigo("Jacobo",6);
amigoA.Presentarse();
amigoA.tiempoConocido();
