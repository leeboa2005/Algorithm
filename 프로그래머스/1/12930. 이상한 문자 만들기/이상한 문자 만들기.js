function solution(s) {
    let words = s.split(' ');

    let modifiedArr = words.map(function (word) {
        let letters = word.split('');

        let transformed = letters.map(function (char, index) {
            if (index % 2 === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        });
        return transformed.join('');
    });
    return modifiedArr.join(' ');
}

