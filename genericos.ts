function elementoIntRandom(elArreglo: number[]): number{
    let indiceRandom=Math.floor(Math.random()*elArreglo.length);
    return elArreglo[indiceRandom];
}
let posiciones: number[]= [103,458,472,458];
let posicionRandom: number= elementoIntRandom(posiciones);

function randomStrElem(theArray: string[]): string {    
    let randomIndex = Math.floor(Math.random()*theArray.length);    
    return theArray[randomIndex]; 
}
 


function randomElem(theArray: any[]): any {    
    let randomIndex = Math.floor(Math.random()*theArray.length);    
    return theArray[randomIndex]; 
}
 
let positions = [103, 458, 472, 458]; 
let randomPosition = randomElem(positions);
 
let colors: string[] = ['violet', 'indigo', 'blue', 'green']; 
let randomColor: string = randomStrElem(colors);

function removeChar(theString: string, theChar: string): string {    
    let theRegex = new RegExp(theChar, "gi");    
    return theString.replace(theRegex, ''); 
}


