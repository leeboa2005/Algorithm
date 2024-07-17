function solution(t, p) {
    const pLength = p.length;
    const pNumber = parseInt(p, 10);
    let answer = 0;


    for (let i = 0; i <= t.length - pLength; i++) {
        const substring = t.substring(i, i + pLength);
        const substringNumber = parseInt(substring, 10);
        if (substringNumber <= pNumber) {
            answer++;
        }
    }

    return answer;
}

