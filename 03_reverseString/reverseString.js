const reverseString = function (string) {
  let arr = [];
  for (let i = 1; i <= string.length; i++) {
    let nextChar = string[string.length - i];
    arr.push(nextChar);
  }
  const reversedString = arr.join("");
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
