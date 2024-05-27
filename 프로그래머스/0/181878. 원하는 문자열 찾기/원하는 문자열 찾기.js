function solution(myString, pat) {
    let newMyString = myString.toLowerCase();
    let newPat= pat.toLowerCase();
    answer = newMyString.includes(newPat) 
    return answer ? 1: 0;
}