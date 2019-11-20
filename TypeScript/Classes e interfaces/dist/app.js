var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NaveEspacial = /** @class */ (function () {
    function NaveEspacial(propulsor, cargoContainer) {
        this.propulsor = propulsor;
        this.cargoContainer = cargoContainer;
    }
    NaveEspacial.prototype.jumpIntoHyperSpace = function () {
        console.log("Entrando no hiperespa\u00E7o com " + this.propulsor);
    };
    return NaveEspacial;
}());
var ship = new NaveEspacial("HyperDrive", 5);
// ship.jumpIntoHyperSpace()
var MilleniumFalcon = /** @class */ (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon(propulsor, cargoContainer) {
        var _this = _super.call(this, "", null) || this;
        _this.propulsor = propulsor;
        _this.cargoContainer = cargoContainer;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperSpace = function () {
        if (Math.random() > 0.5) {
            _super.prototype.jumpIntoHyperSpace.call(this);
        }
        else {
            console.log("Falha ao entrar no hiperespaço");
        }
    };
    return MilleniumFalcon;
}(NaveEspacial));
var Foquete = /** @class */ (function (_super) {
    __extends(Foquete, _super);
    function Foquete() {
        return _super.call(this, "HyperDrive", 9) || this;
    }
    return Foquete;
}(MilleniumFalcon));
var falcon = new MilleniumFalcon("HyperDrive", 1);
falcon.jumpIntoHyperSpace();
var fog = new Foquete();
fog.jumpIntoHyperSpace();
var naveCarga = function (ship) { return ship.cargoContainer > 2; };
console.log("Falcon \u00E9 uma boa nave para carga? " + (naveCarga(falcon) ? 'Yes' : 'No'));
console.log("Foguete \u00E9 uma boa nave para carga? " + (naveCarga(fog) ? 'Yes' : 'No'));
