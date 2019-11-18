var message = "Help me, Obi-Wan Kenobi. You'me my only hope!";
console.log(message);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = "T-800";
console.log("My favorite droid is " + favoriteDroid);
var isEnoughToBeatMG = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon? " + (isEnoughToBeatMG(distance) ? 'Yes' : 'No'));
