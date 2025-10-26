const sumAll = function(numA, numB) {
    let firstNumber = numA;
    let secondNumber = numB;
    let sum = 0;

    if ((Math.sign(firstNumber)) == 1 && (Math.sign(secondNumber)) == 1 && Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
        if (firstNumber <= secondNumber){
            for(let i = firstNumber; i <= secondNumber; i++){
                sum += i;
            }
        }
        if (firstNumber > secondNumber){
            for(let i = secondNumber; i <= firstNumber; i++){
                sum +=i;
            }
        }
        return sum;
    } else {
        return "ERROR";
    }
        
};

// Do not edit below this line
module.exports = sumAll;
