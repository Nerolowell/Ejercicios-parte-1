class Persona {
    public nombre: string ;
    constructor(elNombre: string){
        this.nombre = elNombre;
    }
    Presentarse(){
        console.log("Hola, yo soy "+ this.nombre +" :)");
    }
}
let personaA=new Persona("Samantha");
personaA.Presentarse();
personaA.nombre="Mindy";
personaA.Presentarse();