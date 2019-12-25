//1. Literal objects : Singleton objects. Can not instantiate
var jane = {
    name: 'Jane'
}


//2. Function construtors : Are normal functions that use to construct objects.
// New empty object will be created, assign "this" pointer to that new empty object and that object will be returned

function Person(name) {
    this.name = name;
}

var john = new Person('John');
console.log('Hello ' + john.name);

// 3. Object.create
// create a new empty object and assign input object(jane) to __proto__
var janeObj = Object.create(jane);
console.dir(janeObj.__proto__);


// Object behave and store as same as in java
var a = 10;
var b = a;
b = 20;
console.log(a);
console.log(b);

var aa = { name: 'Rahal' };
var bb = aa;
bb.name = "Kasun";
console.log(aa);
console.log(bb);

// Method Borrowing (call)
var john = {
    name: 'John',
    greet: function (msg, arg2) {
        console.log(this.name + ' ' + msg + arg2);
    }
}

john.greet.call(jane, ',Hello there! ', 'How are you?');

// Bind is similar to call but use curring
var askJane = john.greet.bind(jane, 'Hello ');
askJane("Howdy?")