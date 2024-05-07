function solution(a, b) {
  let newArr = [a, b];
  let sum = 0;

  newArr.sort(function (a, b) {
    return b - a;
  });

  for (let i = newArr[1]; i <= newArr[0]; i++) {
    sum += i;
  }
  return sum;
}
