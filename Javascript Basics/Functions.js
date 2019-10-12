//Function declaration:

function greet1() {
    console.log('Hello there!');
}

//Function expressions:

var greet2 = function () {
    console.log('Hello there!');
}

//First class function : Everyting that you can do with other variable types, you can do with functions.
// i.e pass as param, assign to variable , many more

function logGreet(fn) {
    fn();
}

logGreet(greet1);


//Function construtors : Are normal functions that use to construct objects.
// New empty object will be created, assign "this" pointer to that new empty object and that object will be returned

function Person(name) {
    this.name = name;
}

var john = new Person('John');
console.log('Hello ' + john.name);