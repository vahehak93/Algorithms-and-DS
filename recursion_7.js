/*Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result. */

function recursiveSum(num) {
  let str = String(num);
  let res = str.split("");

  let sum = res.reduce(function (start, curr) {
    return parseFloat(start) + parseFloat(curr);
  }, 0);

  if (res.length > 1) {
    num = sum;
    return recursiveSum(num);
  }
  return merg res[0];
}

let num = "1235";
console.log(recursiveSum(num));
