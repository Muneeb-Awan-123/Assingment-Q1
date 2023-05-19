/* More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.
• Start with your program from Exercise 15.
 Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 • Print a new set of invitation messages, one for each person in your list. */

 let gest_list1 = ['javed', 'Ahmad ', 'Farooq', 'Ali' ];
const message_3 = ' Come for dinner at night';


console.log(gest_list1, ' Not avaible for dinner');   
gest_list1[2] = 'Hamza';
gest_list1.splice(0,0, "Amjad");    
console.log(gest_list1);

for (let i=0; i < gest_list1.length; i++) 
{
    console.log(gest_list1[i] + message_3 + "New got a bigger dinner table");     
} 

gest_list1.unshift('Talha tahir');                       // Add one new guest to the beginning of your array.
gest_list1.splice(2, 0, "hassan"); 

// Add one new guest to the middle of your array

gest_list1.push('Mohsin');
// console.log(gest_list1); 
for(let i=0; i < gest_list1.length; i++){
    console.log(gest_list1[i] + message_3);
}
