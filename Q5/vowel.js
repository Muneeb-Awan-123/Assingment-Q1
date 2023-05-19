"use strict";
/*
function checkVowel (letter:string){
    if (letter === 'a'){
        console.log(`letter ${letter} is vowel.`)
    } else if (letter === 'e') {
        console.log(`letter ${letter} is vowel.`)
    } else if (letter === 'i'){
        console.log(`letter ${letter} is vowel.`)
    } else if (letter === 'o') {
        console.log(`letter ${letter} is vowel.`)
    } else {
        console.log(`letter ${letter} is Not vowel.`)
    }
}


checkVowel ('a');
checkVowel ('b');
checkVowel ('c');
checkVowel ('g');
checkVowel ('h');
checkVowel ('i');
checkVowel ('m'); */
function checkVowel(letter) {
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        console.log(`letter ${letter} is vowel`);
    }
    else {
        console.log(`letter ${letter} is Not vowel`);
    }
}
checkVowel('f');
