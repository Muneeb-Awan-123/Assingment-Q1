"use strict";
/* Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them.
The text of each message should be the same, but each message should be personalized with the person’s name. */
const persons = ["Ali", "Aslam", "Hamza", "Tanver"];
for (let i = 0; i < persons.length; i++) {
    console.log(`Hello ${persons[i]}! How are you ?`);
}
for (let i = 0; i < persons.length; i++) {
    console.log(`Hello ${persons[i]}! what are you doing ?`);
}
