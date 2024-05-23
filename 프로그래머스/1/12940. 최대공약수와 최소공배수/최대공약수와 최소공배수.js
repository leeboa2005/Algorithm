function solution(n, m) {
    let answer = [];
    const min = (a, b) => {
        if (b === 0) return a; 
        return min(b, a % b); 
    };
    const max = (a, b) => (a * b) / min(a, b);

    answer.push(min(n, m), max(n, m));
    return answer;
}
