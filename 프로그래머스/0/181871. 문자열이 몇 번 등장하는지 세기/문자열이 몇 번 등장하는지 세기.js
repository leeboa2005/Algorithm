function solution(myString, pat) {
    let answer = 0;

    for (let i = 0; i <= myString.length - pat.length; i++) {
        let str = '';
        for (let j = i; j < i + pat.length; j++) {
            str += myString[j];
        }
        if (str === pat) answer++;
    }

    return answer;
}