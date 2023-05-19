/* Dinner Guests: Working with one of the programs from Exercises 14 through 18,
we use Exercises 14
print a message indicating the number of people you are inviting to dinner. */

const guestList = ["ALI","AMJAD","TALHA","REHAN"];
const text = ["Come for dinner at night"];

for (let i=0; i < guestList.length; i++) 
{
   console.log(`Dear! ${guestList[i]} please ${text}`)
}

console.log('Only ' + guestList.length + ' no of people come for dinner');