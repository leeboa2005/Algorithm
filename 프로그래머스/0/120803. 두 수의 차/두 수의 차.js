function solution(num1, num2) {
   let answer = 0;
    if (-50000 <= num1 && num2 <= 50000) {
        answer = num1 - num2;
        return answer;
    } else{
        console.log('범위를 초과하였습니다.')
    }
}

solution(100, 2)