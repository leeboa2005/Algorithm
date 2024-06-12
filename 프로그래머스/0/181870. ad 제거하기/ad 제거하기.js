const find = 'ad';
function solution(strArr) {
    newArray = strArr.filter((e) => !e.includes(find));

    return newArray;
}