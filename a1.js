function avg(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  let avg = sum / arr.length;

  return avg;
}

console.log(avg([70, 72, 68, 65, 74, 74, 73]));

function max(arr) {
  let maxi = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum > maxi) {
      maxi = currentNum;
    }
  }
  return maxi;
}
console.log(max([70, 72, 68, 65, 74, 74, 73]));

function min(arr) {
  let small = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];
    if (currentNum < small) {
      small = currentNum;
    }
  }
  return small;
}
console.log(min([70, 72, 68, 65, 74, 74, 73]));

// compare two elements in an array.
const ww = [70, 72, 68, 65, 74, 74, 73];
let max_delta = Math.abs(ww[0] - ww[1]);
for (let i = 0; i < ww.length - 1; i++) {
  let temp1 = ww[i];
  let temp2 = ww[i + 1];
  let delta = Math.abs(temp1 - temp2);

  console.log(
    `comparing ---> ${temp1} to ---> ${temp2} and delta is ---> ${delta}`
  );

  if (delta > max_delta) {
    max_delta = delta;
  }
}
console.log("max delta ---->", max_delta);
