"use strict";
/* Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
 and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program. */
let Guest_list = ['Talha', 'javed', 'Ahmad ', 'Hassan', 'Muneeb', 'Hamza'];
let letter = ' Soory not table for dinner ';
console.log('Soory: i have sapace for only two people for dinner');
let Ist_gest_for_dinner = Guest_list.splice(0, 1);
let second_gest_for_dinner = Guest_list.splice(3, 1);
let update_gest_list = Ist_gest_for_dinner.concat(second_gest_for_dinner);
for (let i = 0; i < update_gest_list.length; i++) {
    console.log(update_gest_list[i] + ' Come for dinner');
}
for (let i = 0; i < Guest_list.length; i++) {
    console.log(Guest_list[i] + letter);
}
let empty_list = Guest_list.splice(0, 0);
console.log(empty_list);
