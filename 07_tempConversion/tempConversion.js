// GOAL:
// Create two functions that convert fahrenheit to celcius and vice versa and round output
// to 1 decimal place

const convertToCelsius = function(fahrenheit) { 
  return Math.round((fahrenheit - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(celcius) {
  return Math.round((celcius * 9 / 5 + 32) * 10) / 10;
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
