class NaveEspacial{
    constructor(public propulsor: string, public cargoContainer: number){
    }

    jumpIntoHyperSpace(){
        console.log(`Entrando no hiperespaço com ${this.propulsor}`)
    }
}

let ship = new NaveEspacial("HyperDrive", 5)
// ship.jumpIntoHyperSpace()

class MilleniumFalcon extends NaveEspacial implements ContainerShip{

    constructor(public propulsor: string, public cargoContainer: number){
        super("", null)
    }
    jumpIntoHyperSpace(){
        if (Math.random() > 0.5) {
            super.jumpIntoHyperSpace()
        }else{
            console.log("Falha ao entrar no hiperespaço")
        }
    }
}

class Foquete extends MilleniumFalcon implements ContainerShip{
    constructor(){
        super("HyperDrive", 9)
    }
}
let falcon = new MilleniumFalcon("HyperDrive", 1)
falcon.jumpIntoHyperSpace()

let fog = new Foquete()
fog.jumpIntoHyperSpace();


interface ContainerShip{
    cargoContainer?: number
}

let naveCarga = (ship: ContainerShip) => ship.cargoContainer > 2
console.log(`Falcon é uma boa nave para carga? ${naveCarga(falcon) ? 'Yes' : 'No' }`)
console.log(`Foguete é uma boa nave para carga? ${naveCarga(fog) ? 'Yes' : 'No'}`)

