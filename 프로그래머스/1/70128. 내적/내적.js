let plusNum = 0;
let result = 0;
function solution(a, b) {
  for (let i = 0; i < a.length; i++) {
    plusNum = a[i] * b[i];
    result += plusNum;
  }
  return result;
}