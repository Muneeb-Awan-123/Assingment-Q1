 /* Changing Guest List: You just heard that one of your guests can’t make the dinner,
 so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */

let gest_list = ['javed', 'Ahmad ', 'Farooq', 'Ali' ];
const message_2 = ' Come for dinner at night';


console.log(gest_list, ' Not avaible for dinner');   //Add a print statement at the end of your program stating the name of the guest who can’t make it.
gest_list[2] = 'Hamza';
gest_list.splice(0,0, "Amjad");    //Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
console.log(gest_list);

for (let i=0; i < gest_list.length; i++) 
{
    console.log(`Dear! ${gest_list[i]} please ${message_2}`)         // Print a second set of invitation messages, one for each person who is still in your list.
}


