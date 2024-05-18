let answer = '';
let newArr = [];

function solution(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) newArr.push(s[i]);
        else newArr.push(s[i]);
    }
    newArr.sort();
    newArr.reverse();
    answer = newArr.join('');

    return answer;
}

