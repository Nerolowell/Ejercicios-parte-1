function area(shape: string, width: number, height: number) {    
    var area = width * height;    
    return "Soy un " + shape + " con un área de: " + area + " cm² :)"; 
}
 
document.body.innerHTML = area("rectangulo", 30, 15);