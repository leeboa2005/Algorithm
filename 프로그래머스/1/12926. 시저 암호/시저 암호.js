function solution(s, n) {
    let result = '';

    for (let char of s) {
        if (char === ' ') {
            result += ' '; 
        } else if (char >= 'A' && char <= 'Z') {
            let newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + n) % 26) + 65);
            result += newChar;
        } else if (char >= 'a' && char <= 'z') {
            let newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + n) % 26) + 97);
            result += newChar;
        }
    }
    return result;
}
