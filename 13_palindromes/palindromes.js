const palindromes = function (string) {
    let cleanString = string
                        .toLowerCase()
                        .replace(/[!@#$%^&., ?]/g, "")
                        .split("");

    console.log(cleanString);
    return cleanString.join('') === cleanString.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
