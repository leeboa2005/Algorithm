function solution(n) {
  const num = Math.sqrt(n);
  const numCheck = Number.isInteger(num);
  let answer = 0;

  numCheck == 1 ? (answer = Math.pow(num + 1, 2)) : (answer = -1);
  return answer;
}
