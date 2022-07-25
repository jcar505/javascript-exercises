const ftoc = function (fTemp) {
  let celcius = (fTemp - 32) * (5 / 9);
  celcius = Math.round(celcius * 10) / 10;
  return celcius;
};

const ctof = function (cTemp) {
  let fahrenheit = cTemp * (9 / 5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
