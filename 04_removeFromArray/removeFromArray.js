// PROBLEM:
// Create a script that takes an array as its first argument and unlimted optional arguments
// that checks similar values inside an array and then removes it from the array.

// PLAN:
// Inputs the program will gave:
// 1. Array as its first arguments
// 2. Optional one or more arguments

// Desired output:An array that removes similar values stated on its optional arguments.

// Steps to return desired output:
// 1. Get argument objects.
// 2. Convert argument objects into array.
// 3. Store first index argument (Which is an array) in a variable
// 4. Loop argument object array starting from second index to last
// 5. If the current's argument value has the same value inside the stored array (first index array), 
//      then remove the value, else, continue to the next argument value
// 6. After looping, return the final array with removed values

// Version 1
// const removeFromArray = function(array, ...args) {
//     const finalArray = [];
//     for (let i = 0; i < array.length; i++) {
//         if (args.indexOf(array[i]) === -1) {
//             finalArray.push(array[i]); 
//         }
//     }
//     return finalArray;
// };

// Version 2
const removeFromArray = function(array, ...args) {
    const finalArray = [];
    array.forEach(item => {
        if (!args.includes(item)) finalArray.push(item);   
    });
    return finalArray;
};

removeFromArray([1,2,4,5,6,3,9], 4, 5, 6);

// Do not edit below this line
module.exports = removeFromArray;
