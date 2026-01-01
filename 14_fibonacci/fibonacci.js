const fibonacci = function(input) {
    if (input < 0) {
        return "OOPS";
    } else if (input == 0) {
        return 0;
    };

    let fibonacci = [1, 1];
    for (let i = 2; i < input; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    };
    console.log(fibonacci);
    return fibonacci[input-1];
};

// Do not edit below this line
module.exports = fibonacci;
