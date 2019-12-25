//-------------------- ES 5---------------------------
// Fundamental building block similar to class in java
// Closure & IFEE techniques used

var myModule = (function () {
    var age = 50;

    var changeAge = function (ag) {
        if (age > 0) {
            age = ag;
            console.log('Age set');
        }
    }

    return {
        setAge: changeAge,
        ageee: age
    }
})();

// can not  access changeAge
//myModule.changeAge(5);

// can access setAge
myModule.setAge(7);


//-------------------- ES 6---------------------------
// use "import" and "export" keywords
// 