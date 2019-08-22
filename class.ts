class Shape {
 
    area: number;
    color: string;
 
    constructor ( public name: string, width: number, height: number ) {
        this.area = width * height;
        this.color = "morado";
    };
 
    shoutout() {
        return "Yo soy un " + this.name + " " + this.color +  " con un area de " + this.area + " cm².";
 
    }
}
class Shape3D extends Shape{
    volume: number;
    constructor ( public name: string, width: number, height: number, length: number ) {
        super( name, width, height );
        this.volume = length * this.area;
    };
    shoutout(){
        return "Yo soy un "+ this.name+ " con un volumen de: " + this.volume +" cm³.";
    }
    superShout(){
        return super.shoutout();
    }
}
var cube= new Shape3D("cubo", 30, 30, 30 );
console.log(cube.shoutout());
console.log(cube.superShout());
