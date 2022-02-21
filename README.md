# Algorithms-and-DS

> Bellow is the Github link for all done homeworks.

[Algorithms-and-DS](hhttps://github.com/vahehak93/Algorithms-and-DS.git)

---

> Recursion

***Task 1***

 Write a recursive function to determine whether all digits of the number are odd or not.

 ```javascript
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
```
***Task 2***

Given an array of numbers. Write a recursive function to find its minimal positive
element. (if such element does not exist, return -1).

```javascript
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
```
***Task 3***

Given an array of numbers which is almost sorted in ascending order. Find the index
where sorting order is violated.

```javascript
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
```
***Task 4***

Given an array. Write a recursive function that removes the first element and returns the
given array. (without using arr.shift())

```javascript
function recursiveShift(arr, count = 0) {
  if (count === 0) {
    arr = arr.slice(1);
    return recursiveShift(arr, count + 1);
  }
  return arr;
}

let arr = [6, 78, "m", 0, 1];
console.log(recursiveShift(arr));
```
***Task 5***

Given an array of nested arrays. Write a recursive function that flattens it. (Hint create
function that concats arrays).

```javascript
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
```
***Task 6***

Given an array and a number N. Write a recursive function that rotates an array N
places to the left. (Hint: to add element to the beginning use arr.unshift())

```javascript
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
```

***Task 7***

Given a number. Write a function that calculates its sum of the digits and if that sum has
more than 1 digit find the sum of digits of that number. Repeat that process if needed
and return the result.

```javascript
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
  return res[0];
}

let num = "1235";
console.log(recursiveSum(num));
```
***Task 8***

Implement merge sort

```javascript
function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

let left = [1, 3, 2];
let right = [6, 5, 4];

function mergeSort(arr) {
  const half = arr.length / 2;
  if (arr.length <= 1) {
    return arr;
  }
  const left = arr.splice(0, half);
  const right = arr;
  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(merge(left, right)));
```
