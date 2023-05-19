// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// If the list is empty, print the message We need to find some users!
// Remove all of the usernames from your array, and make sure the correct message is printed.


var userName = [];
var userName_1 = userName.slice();
if (userName.length != 0){
    if (userName.length >= userName_1.length){
        for (var i=0; i<userName_1.length; i++){
            if(userName[i] =="Admin"){
                console.log("Hello " + userName[i] + " would you like to see a status report?");
            }
            else{
                console.log("Hello " + userName[i] + " thank you for logging in again.");
            }
        }
    }
}
else{
    console.log("We need to find some users!");
}


// corrct code

var userName = ["Admin", "Asjad", "Ahmed", "Talha", "Zubair"];
var userName_1 = userName.slice();
if (userName.length != 0){
    if (userName.length >= userName_1.length){
        for (var i=0; i<userName_1.length; i++){
            if(userName[i] =="Admin"){
                console.log("Hello " + userName[i] + " would you like to see a status report?");
            }
            else{
                console.log("Hello " + userName[i] + " thank you for logging in again.");
            }
        }
    }
}
else{
    console.log("We need to find some users!");
}