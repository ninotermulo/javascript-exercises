// GOAL:
// Return the sum of given two number parameters including numbers between them

// Constraints:
// 1. min is higher than num 2
// 2. User inputs different data type from either side or both numbers
// 3. User inputs negative numbers from either or both numbers

// Version 1
// const sumAll = function(min, max) {
//     let higherValue = max;
//     let lowerValue = min;
//     let finalSum = 0;
//     switch (true) {
//         case typeof min != 'number'  || typeof max != 'number':
//         case min < 0 || max < 0:
//             return 'ERROR';
//         case min > max:
//             higherValue = min;
//             lowerValue = max;
//     }
//     for (let i = lowerValue; i <= higherValue; i++) {
//         finalSum += i;
//     }
//     return finalSum;
// };

// Version 2
const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max) {
        const temp = max;
        max = min;
        min = temp;
    }
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;   
}
console.log(sumAll(1, 100));


// Do not edit below this line
module.exports = sumAll;
