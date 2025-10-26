const removeFromArray = function(array, ...items) {
    return array.filter(arg => !items.includes(arg))
};

// Do not edit below this line
module.exports = removeFromArray;
