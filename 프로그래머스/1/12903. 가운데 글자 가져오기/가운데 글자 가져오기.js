function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.length % 2 == 0) {
      answer = s[s.length / 2 - 1] + s[s.length / 2];
    } else {
      answer = s[Math.round(s.length / 2 - 1)];
    }
  }
  return answer;
}
