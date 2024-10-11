function solution(X, Y) {
    let answer = '';
    const countX = {};
    const countY = {};

    for (const char of X) {
        countX[char] = (countX[char] || 0) + 1;
    }

    for (const char of Y) {
        countY[char] = (countY[char] || 0) + 1;
    }

    for (let k = 9; k >= 0; k--) {
        const char = k.toString();
        if (countX[char] && countY[char]) {
            const minCount = Math.min(countX[char], countY[char]);
            answer += char.repeat(minCount);
        }
    }
    if (answer === '') return '-1';
    if (answer[0] === '0') return '0';

    answer = answer
        .split('')
        .sort((a, b) => b - a)
        .join('');

    return answer;
}
