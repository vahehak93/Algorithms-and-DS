/* Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated.*/

function ascendingCheck(arr, count = 0) {
  if (arr.length < 2) {
    return -1;
  }

  if (arr.length) {
    if (arr[0] > arr[1]) return arr.indexOf(arr[1]) + count;
  }

  return ascendingCheck(arr.slice(1), count + 1);
}

let arr = [2, 12, 11, 34, 64];
console.log(ascendingCheck(arr));
