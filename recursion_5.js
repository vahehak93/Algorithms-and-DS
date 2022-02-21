/*Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).           */

function recursiveFlatten(arr) {
  let arr1 = [];
  for (let i in arr) {
    if (Array.isArray(arr[i])) {
      let tempArr = recursiveFlatten(arr[i]);
      tempArr.forEach((item) => {
        arr1.push(item);
      });
    } else {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

let arr = [14, [1, [[[3, []]], 1], 0]];
console.log(recursiveFlatten(arr));
