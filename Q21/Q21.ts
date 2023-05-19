/* They think of something you could store in a TypeScript Object.
 Write a program that creates Objects containing these items. */

interface Person {
    name: string;
    age: number;
    email: string;
    phone: string;
  }
  
  const myPerson: Person = {
    name: "Ali Hamza ",
    age: 29,
    email: "hamza67@gmail.com",
    phone: "+92320-0808706"
  };
  
  console.log(myPerson);
  