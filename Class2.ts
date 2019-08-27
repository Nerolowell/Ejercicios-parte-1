class Persona {
    private nombre: string ;
    protected age: number;
    protected constructor(elNombre: string, laEdad: number){
        this.nombre = elNombre;
        this.age= laEdad;
    }
    Presentarse(){
        console.log("Hola, yo soy "+ this.nombre +" :)");
    }
}
class Amigo extends Persona{
    aniosConocido: number;
    constructor(name: string, age: number, aniosConocido:number){
        super(name, age);
        this.aniosConocido=aniosConocido;
    }
    tiempoConocido(){
        console.log("Hemos sido amigos por "+this.aniosConocido+ " años :)")
    }
    amigosDesde(){
        let primerAnio=this.age - this.aniosConocido;
        console.log(`Hemos sido amigos desde que yo tenía ${primerAnio} años `)
    }
}
let amigoA= new Amigo("William",19,8);
amigoA.amigosDesde();