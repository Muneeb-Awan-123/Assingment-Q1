// Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and 
// one array with the Great added to each magician’s name.

let magicians = ["ali","hamza","sonu","hassan","ahmad"];

function show_magicians(magicians) {
  for (let i = 0; i < magicians.length; i++) {
    console.log(magicians[i]);
  }
}

function make_great(magicians) {
  let great_magicians = [];
  for (let i = 0; i < magicians.length; i++) {
    great_magicians.push("The Great Magician " + magicians[i]);
  }
  return great_magicians;
}

let great_magicians = make_great(magicians.slice()); 
show_magicians(magicians);
show_magicians(great_magicians);
