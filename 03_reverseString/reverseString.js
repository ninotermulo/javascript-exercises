// Problem
// - We want to reverse string on any input given by user

// Plan
// - Converst strings to array
// - Reverse the array
// - Stitch the array together to form a string

const reverseString = function(string) {
    // Version 1
    // let stringArray = string.split('');
    // let reversedString;
    // stringArray.reverse();
    // reversedString = stringArray.join('');
    // console.log(reversedString);

    // Version 2
    // let stringArray = string.split('').reverse();
    // let reversedString = stringArray.join('');
    // console.log(reversedString);

    // Version 3
    // let reversedString = string.split('').reverse().join('');
    // return reversedString;

    // Version 4
    return string.split('').reverse().join('');
};

console.log(reverseString("123! abc!"));

// Do not edit below this line
module.exports = reverseString;
