// Given an array find the difference of each elements or values and return the total.
// e.g given [2,6,8,12,17,25]
// returns [4,2,4,5,8] --> total = 23

function sumDelta(arr) {
  let total = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let v1 = arr[i];
    let v2 = arr[i + 1];
    let dif = Math.abs(v1 - v2);

    console.log(`diff btw elmnt ${v1} and ${v2} is ---> ${dif}`);

    total += dif;
  }
  return total;
}

// cases to consoider when writing a function that have an array.
/*
1. what if is an empty array.
2. only one value.
3. only 2 values.
4. many values.

*/

console.log(sumDelta([2, 6, 8, 12, 17, 25]));
