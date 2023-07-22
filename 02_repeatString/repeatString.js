const repeatString = function(string, frequency) {
    // First Answer
    // let finalString = '';
    // switch (true) {
    //     case frequency == 0:
    //         return finalString;
    //     case frequency < 0:
    //         return 'ERROR';
    //     default:
    //         for (let i = 1; i <= frequency; i++) {
    //             finalString += string;
    //         }
    //         return finalString;       
    // }

    // Modified
    if (frequency < 0) return 'ERROR';
    let finalString = '';
    for (let i = 1; i <= frequency; i++) {
        finalString += string
    }
    return finalString;
}

console.log(repeatString('Hello', 10));

// Do not edit below this line
module.exports = repeatString;

