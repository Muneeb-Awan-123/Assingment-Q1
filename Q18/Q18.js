"use strict";
/* Seeing the World: Think of at least five places in the world you’d like to visit.
• Print your array in its original order.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/
let firstNames = ['Saudia Arabia', 'Dubai', 'Spain', 'London', 'Qatar']; //• Store the locations in a array. Make sure the array is not in alphabetical order.
console.log(firstNames);
let secondNames = ['Saudia Arabia', 'Dubai', 'Spain', 'London', 'Qatar']; // Print your array in alphabetical order without modifying the actual list.
console.log(secondNames.sort());
let thirdNames = secondNames.reverse(); //  Print your array in reverse alphabetical order without changing the order of the original list.
console.log(thirdNames);
let fourthNames = thirdNames.reverse(); //Reverse the order of your list. Print the array to show that its order has changed.
console.log(fourthNames);
let fifthNames = fourthNames.reverse(); // Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(fifthNames);
let SixthNames = fifthNames.sort(); // Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(secondNames);
let seventhNames = SixthNames.reverse(); //  Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(secondNames);
