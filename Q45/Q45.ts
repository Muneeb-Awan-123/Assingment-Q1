// Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
//  It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.

function make_car(manufacturer, model, ...options) {
    let car = { manufacturer: manufacturer, model: model };
    for (let i = 0; i < options.length; i += 2) {
      let key = options[i];
      let value = options[i + 1];
      car[key] = value;
    }
    return car;
  }
  
  let my_car = make_car("Tesla", " 2017 S", "color", "red", "features", ["autopilot", "self-driving"]);
  
  console.log(my_car);
  