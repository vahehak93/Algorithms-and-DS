/* Given an array of numbers. Write a recursive function to find its minimal positive
 element. (if such element does not exist, return -1).       */

function recursivePosMin(arr) {
  if (arr.length < 2) {
    return arr[0];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 0) {
      arr.splice(i, 1);
    }
  }
  if (arr.length) {
    let min = arr.shift();
    return Math.min(min, recursivePosMin(arr));
  } else {
    return -1;
  }
}

let arr = [56, -9, 87, -23, -10, 55, -1, -2, 1, -3, -4];
let arr1 = [-1, -5, 10, 3, 20, 25];
let arr2 = [2, 5, -18, 0, 4, 3, 1, 7];
let arr3 = [-5, -2, -5, -1];

console.log(recursivePosMin(arr3));
