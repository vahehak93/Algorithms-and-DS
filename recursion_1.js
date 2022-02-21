// Write a recursive function to determine whether all digits of the number are odd or not.

function recursiveOdd(num) {
  let oddCounter = 0;
  if (num.length >= 0)
    if (num[0] % 2 === 0) {
      return false;
    } else {
      oddCounter += 1;
    }
  if (oddCounter === num.length) {
    return true;
  }

  return recursiveOdd(num.slice(1));
}

console.log(recursiveOdd("1135922"));
