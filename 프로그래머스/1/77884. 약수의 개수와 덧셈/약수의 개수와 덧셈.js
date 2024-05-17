let answer = 0;
function solution(left, right) {
  for (let i = left; i <= right; i++) {
    let divisor = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        divisor++;
      }
    }
    divisor % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
