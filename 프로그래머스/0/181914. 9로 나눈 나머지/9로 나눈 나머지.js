
function solution(number) {
    let sum = 0;
    let answer = 0;
    for (let i = 0; i < number.length; i++) {
        sum += Number(number[i]);
    }
    answer = sum % 9;
    return answer;
}
