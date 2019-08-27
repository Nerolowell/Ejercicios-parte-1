interface Gente{
    name: string
}
interface Familiañ{
    edad:number,
    name:string,
    relacion:string
}
interface Celebridad extends Gente{
    profesion: string
}
function imprimirNombre<T extends Gente>(Entrada: T): void{
    console.log(`Mi nombre es ${Entrada.name}`); ;
}
let serena: Celebridad={
    name: 'Serena Williams',
    profesion: 'Jugadora de tenis'
}
imprimirNombre(serena);