/*Given an array. Write a recursive function that removes the first element and returns the
given array. (without using arr.shift()) */

function recursiveShift(arr, count = 0) {
  if (count === 0) {
    arr = arr.slice(1);
    return recursiveShift(arr, count + 1);
  }
  return arr;
}

let arr = [6, 78, "m", 0, 1];
console.log(recursiveShift(arr));
