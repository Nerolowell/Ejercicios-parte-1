var shape = {
    name: "rectángulo",
    popup: function () {
        var _this = this;
        console.log('Esto adentro del popup(): ' + this.name);
        setTimeout(function () {
            console.log('Esto adentro del setTimeout(): ' + _this.name);
            console.log("Soy un " + _this.name + " :)");
        }, 3000);
    }
};
shape.popup();
