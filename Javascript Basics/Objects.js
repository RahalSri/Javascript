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