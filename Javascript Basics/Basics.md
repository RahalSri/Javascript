javascript is single threaded language. i.e. program hold when it encounter alert('hello')

# How web api calls (async calls like ajax) work 

browser (not v8) has web api that can handle in background

1.call stack recognise web api functions and handed over to browser
2. browser execute them in background 
3. once task finished browser push callback function to "callback queue"
4. "event loop" send call back function from "callback queue" to "call stack"

#3 explained with more details in "/img/event loop.png"

https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd




#  Primitive data types 
1. String
2. Number
3. Boolean
4. Undefined
5. null

hey are dynamic. data types are automatically assigned to varialbles

#  Falsy values 
Falsy values are values when they evaluate as false in if condition
i.e : false, '', null, undefined, 0, NaN

# equality opperator
equality opperator

var height = 23;
if(height == '23') {
    console.log('IT works)
}

above condition satisfies as == do type conversion and compare.


if(height === '23'){
    console.log('NOT WORK);
}

above condition not satisfied as === do strict comparison.

# Background

javascript versions

ES5(2009) -> ES6(2015) -> SO ON

ES5 : all browsers fully support
ES6 upwords : does not support old browsers. To support all browsers they need to convert ES5 by transfilling and polyfillling

#  EXPLANATION 1
what happen to javascript code : see/img/javascript engine.png

execusion context : A container which store variables and in which a piece of our code is evaluated and executed.
Global execusion context : Codes that is not in functions. In browser this is 'window' object
Execusion stack : each function will have their own ecxecusion context and when functiona call stack will be created. see : /img/execusion stack.png

Before execute code javascript create execution context object which consist of follows
1. Variable object
2. Scope chain
3. "This" object

## Variable object
   i contain all the argument passed to function
   ii code scan for "function declaration" and pointing is created inside variable object to that function
   iii code scan for variable declarations and initialiaed as undefined

    ii & iii are called "Hoisting". That means "function declarations" and variables are initialised before execusion


    Example of hoisting:

    "function declaration"

    calcAge();  // work because hoisting

    function calcAge() {
        console.log('oook)
    }

    foo(); // not working as it is not function declaration rather it is function expression

    var foo = function () {
        console.log('not cool');
    }

    console.log(age); // evaluate as undefined
    var age = 23;


## Scope chain

    * in javascript only way to create new scope is by using new function
    * Lexical scope : A function that is lexically within another function get access to the scope of outer function
    * scope chain : If variable is not found in current scope compiler check for it's parent scope and so on.....
    var a = 'hello ';
    first();

    function first() {
        var b = 'there';
        second();
        function second() {
            console.log(a+ b); // This will print 'hello there' because of scope chaining.
        }
    }

    Scope chain  != execusion stack (Scope chain is solely depend on lexically)

## "This" object
    - Regular function call : this keyword point to the global object
    - Method call (a function inside javascript object): this keyword point to the object that calling the method

    * this object attached to the execusion context
    
# EXPLANATION 2

https://www.youtube.com/watch?v=Fd9VaW0M7K4

## Execution Context

When your run javascripti a special environment called exection context is created to handle the transformation & execution of code. It contains the currently running code and everything that aids in its execution.

See Execution context.img

Execution Context can be visualise as two parts.
1. Memory
2. Execution

Execution context has two phases.

1. Memory Creation Phase
 i) Create global object (browser = window, Node.js = global)
 ii) Create 'this' object and bind it to the global object
 iii) Setup memory heap for story variables and function references
 iv) code scan for "function declaration" and pointing is created inside global object to that function
 v) code scan for variable declarations and initialiaed as undefined
 
2. Execution Phase
 i) Execute code line by line
 ii) Create new execution context for each function call
 
See Execution context ex1.img

## Function Execution Context   

It has similar structure and behavior as in gloabl execution context. Each and every function has their own execution context

See Function Execution context ex1.img
