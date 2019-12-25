//The rest parameter syntax allows us to represent an indefinite number of arguments as an array.


// without rest parameters

function mulAnyNumbers() {
    var args = Array.from(arguments);
    var mul = args.reduce((acc, val) => {
        return acc * val;
    });
    console.log(mul);
}

mulAnyNumbers(2, 3, 3);

// with rest params

function mulAnyNumbers2(...args) {
    var mul = args.reduce((acc, val) => {
        return acc * val;
    });
    console.log(mul);
}

mulAnyNumbers2(2, 3, 3);