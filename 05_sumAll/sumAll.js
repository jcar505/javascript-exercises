const sumAll = function (firstInt, secondInt) {
  if (firstInt < 0 || secondInt < 0) {
    return "ERROR";
  }
  if (typeof firstInt !== "number" || typeof secondInt !== "number") {
    return "ERROR";
  }
  let smallInt;
  let largeInt;
  if (firstInt < secondInt) {
    smallInt = firstInt;
    largeInt = secondInt;
  } else {
    smallInt = secondInt;
    largeInt = firstInt;
  }
  let sum = 0;
  while (smallInt <= largeInt) {
    sum += smallInt;
    smallInt++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
