var shape = {
    name: "rectángulo",
    popup: function(){
        console.log('Esto adentro del popup(): '+ this.name );
        setTimeout(()=>{
            console.log('Esto adentro del setTimeout(): '+this.name);
            console.log("Soy un "+this.name+" :)");
        }, 3000);
    }
};
shape.popup();