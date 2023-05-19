"use strict";
/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
 Then use your list to print a message to each person, inviting them to dinner.  */
const guest_list = ["ALI", "AMJAD", "TALHA", "REHAN"];
const message_1 = ["Come for dinner at night"];
for (let i = 0; i < guest_list.length; i++) {
    console.log(`Dear! ${guest_list[i]} please ${message_1}`);
}
