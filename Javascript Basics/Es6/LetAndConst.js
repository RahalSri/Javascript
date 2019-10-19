// var is function scoped but let and const are block scoped.
function foo(isPrint) {
    if (isPrint) {
        var a = 'Hello Var';
    }
    console.log(a);
}

function bar(isPrint) {
    if (isPrint) {
        let a = 'Hello let';
        const b = 'Hello const'
    }
    console.log(a);
    console.log(b);
}

foo(true);
bar(true);
//-----------------------------------------------------------------------------
// Because let and const are block scope we can use IIFE simply as {}
{
    let private = "I am block scope";
    var public = "I am a  function scope"
}

console.log(private);
console.log(public);