//  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

//  Tests for equality and inequality with strings
//  Tests using the lower case function


let name_1 = "Ali";
let name_2 = "Ahmad";
console.log(name_1 == name_2);
console.log(name_1 != name_2);
console.log(name_1 == name_2.toLowerCase());


// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to


let age_1 = 45;
let age_2 = 45;
console.log(age_1 == age_2);
console.log(age_1 != age_2);
console.log(age_1 <= age_2);
console.log(age_1 >= age_2); 


//  Tests using "and" and "or" operators


console.log(age_1 == age_1 || name_1 == name_2);
console.log(age_1 == age_1 && name_1 == name_2);


//  Test whether an item is in a array


const a = ["Hamza", "Rehan", "Amjad"];
console.log(a.includes("Ahmad"));

// Test whether an item is not in a array

 console.log(a.includes("Ahmad"));