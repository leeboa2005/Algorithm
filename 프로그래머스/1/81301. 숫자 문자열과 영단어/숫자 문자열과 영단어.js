function solution(s) {
    const numberWords = {
        zero: '0',
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };

    let result = '';
    let currentWord = '';

    for (let char of s) {
        currentWord += char;

        if (numberWords[currentWord]) {
            result += numberWords[currentWord];
            currentWord = ''; 
        } else if (!isNaN(char)) {
            result += char; 
            currentWord = ''; 
        }
    }

    // 아직 남아있는 문자가 있다면, result에 추가합니다.
    if (currentWord) {
        result += currentWord;
    }

    return +result;
}

console.log(solution('one4seveneight'));
