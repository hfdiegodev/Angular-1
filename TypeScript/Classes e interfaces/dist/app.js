var NaveEspacial = /** @class */ (function () {
    function NaveEspacial(propulsor) {
        this.propulsor = propulsor;
    }
    NaveEspacial.prototype.jumpIntoHyperSpace = function () {
        console.log("Entrando no hiperespa\u00E7o com " + this.propulsor);
    };
    return NaveEspacial;
}());
var ship = new NaveEspacial("HyperDrive");
ship.jumpIntoHyperSpace;
