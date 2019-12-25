// With arrays

function addThree(a, b, c) {
    console.log(a + b + c);
}

// ES5
var ages = [5, 10, 15];

addThree.apply(null, ages);

// ES6
addThree(...ages);

//  With objects
// Mostly, spread operator with objects is used to make a copy of an existing object 
//or to make a new object with more properties. Here’s how you can “combine” two objects.
const obj = { name: 'Foo', age: 22 };
const newObj = { ...obj, dob: '1986' }

console.log(newObj)