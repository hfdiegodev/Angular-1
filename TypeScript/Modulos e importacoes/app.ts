

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
    constructor(public propulsor: string, public cargoContainer: number, public lugares: number){
        super("", null)
    }
}

interface ContainerShip{
    cargoContainer?: number
}

interface Lugares extends ContainerShip {
    lugares?: number
}

let falcon = new MilleniumFalcon("HyperDrive", 1)
falcon.jumpIntoHyperSpace()

let fog = new Foquete("HyperDrive", 3, 2)
fog.jumpIntoHyperSpace();



let naveCarga = (ship: ContainerShip) => ship.cargoContainer > 2
let naveTransporte = (lugar: Lugares) => lugar.lugares > 3
console.log(`Falcon é uma boa nave para carga? ${naveCarga(falcon) ? 'Sim' : 'Não' }`)
console.log(`Foguete é uma boa nave para carga? ${naveCarga(fog) ? 'Sim.' : 'Não.'}` + 
` Foguete é uma boa nave para transporte de passageiros? ${naveTransporte(fog) ? 'Sim.' : 'Não.'}`)

