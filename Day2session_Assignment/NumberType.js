function checkNumberType(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}
let num = 10;
let result = checkNumberType(num);
console.log(num + " is " + result);