function solution(price, money, count) {
    let newNum = 0;
    let answer = 0;
    for (let i = 1; i <= count; i++) {
        newNum = price * i;
        answer += newNum;
    }
    answer === money || answer < money ? (answer = 0) : (answer = answer - money);
    console.log(answer);
    return answer;
}
