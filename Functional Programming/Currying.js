//A curried function is a function that takes multiple arguments one at a time.
//greeting is a curried function.
// First it get 'Good morning' as a first arg. And then 'Rahal' second argument. line 12.

function greeting(greeting) {
    return function (name) {
        return `${greeting} ${name}`;
    }
}

console.log(greeting('Good morning')('Rahal'));