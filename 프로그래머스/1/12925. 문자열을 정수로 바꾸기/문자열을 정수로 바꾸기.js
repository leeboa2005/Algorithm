let answer = 0;

function solution(s) {
  const first_str = s.charAt(0);
  if (s.length >= 1 && s.length <= 5 && first_str != 0) {
    answer = Number(s);
    return answer;
  } else {
    console.log("다시 입력해주세요");
  }
}


