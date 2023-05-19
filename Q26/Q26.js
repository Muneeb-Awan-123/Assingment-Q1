"use strict";
/* Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.*/
let Colors = "green";
if (Colors == "green") {
    console.log("Player just earned 5 points.");
}
else if (Colors != "green") {
    console.log("Player just earned 10 points.");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let Colors_1 = "red";
if (Colors_1 == "green") {
    console.log("Player just earned 5 points.");
}
else if (Colors_1 != "green") {
    console.log("Player just earned 10 points.");
}
// Write one version of this program that runs the if block and another that runs the else block.
let colors_2 = "yellow";
if (colors_2 == "green") {
    console.log("Player just earned 5 points.");
}
else if (colors_2 === "green") {
    console.log("Player just earned 10 points.");
}
else {
    console.log("Not Matching");
}
