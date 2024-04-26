function solution(arr) {
    let answer = 0;
    let sumResult = 0;

    if (arr.length >= 1 && arr.length <= 100) {
        for (let i = 0; arr.length > i; i++) {
            sumResult += arr[i]
        }
        answer = sumResult / arr.length;

    } else {
        console.log("배열 갯수를 1이상 100이하로 입력해주세요");
    }
     return answer;
}