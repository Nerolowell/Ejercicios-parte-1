function elementoIntRandom(elArreglo) {
    var indiceRandom = Math.floor(Math.random() * elArreglo.length);
    return elArreglo[indiceRandom];
}
var posiciones = [103, 458, 472, 458];
var posicionRandom = elementoIntRandom(posiciones);
function randomStrElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
function randomElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var positions = [103, 458, 472, 458];
var randomPosition = randomElem(positions);
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomStrElem(colors);
function removeChar(theString, theChar) {
    var theRegex = new RegExp(theChar, "gi");
    return theString.replace(theRegex, '');
}
