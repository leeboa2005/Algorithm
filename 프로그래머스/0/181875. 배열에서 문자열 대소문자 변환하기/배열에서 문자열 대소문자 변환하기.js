function solution(strArr) {
    const newArr = strArr.map((item, index) => {
        if (index % 2 !== 0) {
            item = item.toUpperCase();
        } else {
            item = item.toLowerCase();
        }
        return item;
    });
    return newArr;
}
