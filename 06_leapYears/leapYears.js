// GOAL:
// Create a function that checks if a giver year is a leap year or not

// PLAN:
// Criteria for a leap year
// 1. Year that can be divided by 4
// 2. Year that can be divided 100 are not leap year unless they are divisible by 400

// Version 1
// const leapYears = function(year) {
//     if (year % 4 == 0) {
//         if (year % 100 == 0 && year % 400 != 0) return false;    
//         return true;
//     } else {
//         return false;
//     }
// };

// Version 2
const leapYears = function(year) {
    return year % 4 == 0 && (year % 100 != 0 || year % 400 == 0);
}

// Do not edit below this line
module.exports = leapYears;
