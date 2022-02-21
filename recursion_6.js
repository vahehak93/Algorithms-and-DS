/*Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift())    */

function recursiveRotate(arr, index) {
  if (index < arr.length) {
    let count = arr.length - 1;
    arr.unshift(arr[count]);
    arr.splice(count + 1, 1);
    return recursiveRotate(arr, index + 1);
  }
  return arr;
}

let arr = ["a", "b", "c", "d", "e", "f", "g", "h"];
console.log(recursiveRotate(arr, 3));
