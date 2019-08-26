interface Lakes {    
    nombre: string,    
    area: number,    
    largo: number,    
    profundidad: number,    
    esAguaDulce: boolean,    
    paises: string[],
    congela?: string[]
}
let firstLake:Lakes={
    nombre:'Oceano Caspio',
    largo: 1199,
    profundidad: 1025,
    area: 371000,
    esAguaDulce: false,
    paises:['1','2','3','4','5']
}
let secondLake:Lakes={
    nombre:'Superior',
    largo: 1199,
    profundidad: 1025,
    area: 371000,
    esAguaDulce: false,
    paises: ['Canada','Estados Unidos']
}
let thirdLake: Lakes = {
    nombre: 'Baikal',    
    profundidad: 1637,    
    largo: 636,    
    area: 31500,    
    esAguaDulce: true,    
    paises: ['Russia'],    
    congela: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'] 
}

