function solution(s) {
    for (let i = 0; i < s.length; i++) {
        if (s.length === 4 || s.length === 6) {
            return s.split('').every((element) => !isNaN(element));
        } else {
            return false;
        }
    }
}