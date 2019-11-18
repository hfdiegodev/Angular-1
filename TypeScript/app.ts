let message: String = "Help me, Obi-Wan Kenobi. You'me my only hope!"
console.log(message);

let episode: number = 4;
console.log("This is episode " + 4);
episode = episode +1;
console.log("Next episode is " + episode);

let favoriteDroid: String;
favoriteDroid = "T-800";
console.log("My favorite droid is " + favoriteDroid);

let isEnoughToBeatMG = function(parsecs: number) : boolean{
    return parsecs < 12;
}
let distance = 11;
console.log(`Is ${distance} parsecs enough to beat Millenium Falcon? ${isEnoughToBeatMG(distance) ? 'Yes' : 'No'}`);