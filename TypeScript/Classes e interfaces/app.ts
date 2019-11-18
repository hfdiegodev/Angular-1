class NaveEspacial{
    constructor(public propulsor: string){}

    jumpIntoHyperSpace(){
        console.log(`Entrando no hiperespaço com ${this.propulsor}`)
    }
}
let ship = new NaveEspacial("HyperDrive")
ship.jumpIntoHyperSpace
