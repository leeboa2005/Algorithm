function solution(numbers) {
  let answer = 0;
  for (let i = 0; i <= 9; i++)
    if (numbers.includes(i) == false) {
      answer += i;
    }
  return answer;
}
