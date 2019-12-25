//These 3 functions are all designed to set CONTEXT, or more specifically, what “this” refers to.
//---------------------call

var owen = {
    name: "Owen"
}

function sayTo(first, second) {
    console.log(first + " " + this.name + " " + second);
}

sayTo(owen, "Hi", "how are you?");

sayTo.call(owen, "Hi", "how are you?");

//.call essentially forces the value in this in whichever function .call is applied on.
// In this case, we invoke the sayTo function. .call(owen, …) forces the this of sayTo() to be the owen object. 
//Thus this.name is applicable.

//-------------------------apply
//Using .apply() is very similar to .call. The only difference is that .call() takes arg1 and arg2 just one after another.
//For .apply() to work, arguments 1 and 2 need to be entered as an array:


sayTo.apply(owen, ["Hi", "how are you?"]);

//--------------------------bind
//.bind() sets the value of this and changes the function to a new function, but it doesn’t invoke the function.

var sayToOwen = sayTo.bind(owen);
sayToOwen("Hi", "How are you");