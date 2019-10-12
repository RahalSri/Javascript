//Closure is a nested function that has access to the parent variables, even after the parent has executed.
//Consider following ex

function init() {
    let state = 2;

    return function increment() {
        state += 1;
        return state;
    }
}

console.log(init()());