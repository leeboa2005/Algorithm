function solution(s) {
    let answer = [];
    let lastindex = {};

    for (i = 0; i < s.length; i++) {
        const char = s[i];
        if (lastindex[char] === undefined) {
            answer.push(-1);
        } else {
            answer.push(i - lastindex[char]);
        }
        lastindex[char] = i;
    }

    return answer;
}

