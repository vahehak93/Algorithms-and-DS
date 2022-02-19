// Write a recursive function to determine whether all digits of the number are odd or not.

function recursiveOdd(num) {
  num = num.slice(0, -1);
  let last_digit = num.slice(-1);
  let oddCounter = 0;
  if (num.length) {
    if (last_digit % 2 === 0) {
      return false;
    } else {
      oddCounter += 1;
    }
  }
  if (oddCounter === num.length-1) {
      return true
  }
  return recursiveOdd(num);
}

console.log(recursiveOdd("1357291937"));

