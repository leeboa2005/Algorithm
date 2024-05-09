let newArr = [];

function solution(Arr, divisor) {
  for (let i = 0; i < Arr.length; i++) {
    if (Arr[i] % divisor == 0) {
      newArr.push(Arr[i]);
    }
  }

  newArr.sort(function (a, b) {
    return a - b;
  });
  newArr.length !== 0 ? newArr : newArr.push(-1);
  return newArr;
}