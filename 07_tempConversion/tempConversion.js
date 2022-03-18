const ftoc = function(fahrenheit) {
  let celcius = ((fahrenheit - 32) * 5) / 9;
  return Math.round(celcius * 10) / 10;
};

const ctof = function(celcius) {
  let fahrenheit = 1.8 * celcius + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
