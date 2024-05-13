function solution(age) {
  let now = 2022;
  let answer = 0;
  if (age > 0 && age <= 120) {
    answer = now - age + 1;
  }
  return answer;
}
