let plus = 0;
let minus = 0;
let sum = 0;

function solution(absolutes, signs) {
  for (i = 0; i < absolutes.length; i++) {
    signs[i] == false ? (minus += absolutes[i] * -1) : (plus += absolutes[i]);
  }
  sum = minus + plus;
  return sum;
}

