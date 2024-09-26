function solution(food) {
    let leftSide = '';
    let rightSide = '';

    for (let i = 1; i < food.length; i++) {
        const count = Math.floor(food[i] / 2);
        leftSide += i.toString().repeat(count);
        rightSide = i.toString().repeat(count) + rightSide;
    }

    return leftSide + '0' + rightSide;
}

