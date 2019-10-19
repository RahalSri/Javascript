function Person(name) {
    this.name = name;
}

//ES 5
Person.prototype.friends = function (friends) {
    //var self = this; // A trick
    var arr = friends.map(function (el) {
        return this.name + ' is friend with ' + el; //this is undefined. because this is regular function call 'this' bind to global object
    }.bind(this)); // If use bind it will work
    console.log(arr);
}

//ES 6
Person.prototype.friends6 = function (friends) {
    var arr = friends.map(el => this.name + ' is friend with ' + el); // Arrow function bind this to lexical scope
    console.log(arr);
}

var friends = ['Sethan', 'Siribiris', 'Supz', 'Athala'];

new Person('Rahal').friends(friends);
new Person('Rahal').friends6(friends);