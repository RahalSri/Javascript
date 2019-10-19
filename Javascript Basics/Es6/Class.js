// Synthatic sugar of prototypes
// Hoisting does not work for classes

class Student {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}

const john = new Student('John'); //exact same as prototype
john.showName();

//-----------------------------------------------------
// Inheritance ES5 (i.e Athlete is a Person)

var Person5 = function (name) {
    this.name = name;
}

Person5.prototype.showName = function () {
    console.log(this.name);
}

var Athlete = function (name, medals) {
    Person5.call(this, name);
    this.medals = medals;
}

Athlete.prototype = Object.create(Person5.prototype);

var susanthika = new Athlete("Susanthika", 5);
susanthika.showName();


//-----------------------Sub classes-------------------------
// Inheritance ES6 (i.e Athlete is a Person)

class Person6 {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(this.name);
    }
}

class Athlete6 extends Person6 {
    constructor(name, medals) {
        super(name);
        this.medals = medals;
    }
}

const johnAth = new Athlete6('John', 3);
johnAth.showName();