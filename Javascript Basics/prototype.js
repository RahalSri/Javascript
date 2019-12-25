/*
See img/Prototype.png 

1. Every javascript object has prototype property which make inheritance in possible in javascript
2. The prototype property of an object is where we put methods and properties that other objects want to inherit
3. The constructor's prototype property is NOT the prototype of the constructor itself, it's the prototype of 
  all instances that are created  through it.
4. When a certain method(property) is called, the search start from the object itself, if can not be found, search
  moves to the object's prototype. This is called prototype chaining

  https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b
  https://www.freecodecamp.org/news/all-you-need-to-know-to-understand-javascripts-prototype-a2bff2d28f03/  
*/

function Person(name) {
  this.name = name;
}
// see img/Person.png

Person.prototype.greet = function () {
  console.log(this.name);
}
// see img/Personproto

var john = new Person('John');

//seee img/JohnProto

john.greet();
var jane = new Person('Jane');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(Person.prototype);

// confirming #4
console.log(john.__proto__ === Person.prototype);
console.log(jane.__proto__ === Person.prototype);
console.log(john.__proto__ === jane.__proto__);