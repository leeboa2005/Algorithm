function solution(x, n) {
    let answer = [];
    answer[0] = x
    for (let i = 1; i < n; i++) {
        answer[i] = x * (i+1)
    }

    console.log(answer);
    return answer;
}


