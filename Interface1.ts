interface Lagos {    
    nombre: string,    
    area: number,    
    largo: number,    
    profundidad: number,    
    esAguaDulce: boolean,    
    paises: string[],
    congela?: string[],
    [propExtra: string]: any
}
let firstLake:Lagos={
    nombre:'Oceano Caspio',
    largo: 1199,
    profundidad: 1025,
    area: 371000,
    esAguaDulce: false,
    paises:['1','2','3','4','5']
}
let lagoDos:Lagos={
    nombre:'Superior',
    largo: 1199,
    profundidad: 1025,
    area: 371000,
    esAguaDulce: false,
    paises: ['Canada','Estados Unidos']
}
let lagoTres: Lagos = {
    nombre: 'Baikal',    
    profundidad: 1637,    
    largo: 636,    
    area: 31500,    
    esAguaDulce: true,    
    paises: ['Russia'],    
    congela: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'] 
}
let lagocuatro: Lagos = {    
    nombre: 'Tanganyika',    
    profundidad: 1470,    
    largo: 676,    
    area: 32600,    
    esAguaDulce: true,    
    paises: ['Burundi', 'Tanzania', 'Zambia', 'Congo'],    
    kigoma:'Tanzania',    
    kalemie: 'Congo',    
    bujumbura: 'Burundi' 
}


