function solution(t, p) {
    let answer = 0;
    const pNum = Number(p);

    for (let i = 0; i <= t.length - p.length; i++) {
        const substring = t.slice(i, i + p.length);
        const substringNum = Number(substring);

        if (substringNum <= pNum) {
            answer++;
        }
    }

    return answer;
}