const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else if (num === 0) {
    return "";
  } else {
    let resultString = "";
    let i = 0;
    while (i < num) {
      resultString = resultString.concat(string);
      i++;
    }
    return resultString;
  }
};

// Do not edit below this line
module.exports = repeatString;
