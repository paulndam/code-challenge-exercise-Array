// this function should return a boolean if the array contains the value.
// contains([2,34,56,78],3)---> false
// contains([12,10,9,3],9)---> true

function contains(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

console.log(contains([], 13));
console.log(contains([2, 34, 56, 78], 3));
console.log(contains([12, 10, 9, 3], 9));

// function that returns true if array is sorted, meaning that if one element is equal or greater than the preceding element , return true else false.

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let v1 = arr[i];
    let v2 = arr[i + 1];

    if (v1 === v2 || v1 > v2) {
      return false;
    }
  }
  return true;
}

console.log(isSorted([]));
console.log(isSorted([1]));
console.log(isSorted([1, 2]));
console.log(isSorted([1, 2, 3, 4, 5]));
console.log(isSorted([1, 3, 2, 5, 4]));
