function solution(order) {
    let latte = [];
    let americano = [];

    for (let i = 0; i < order.length; i++) {
        if (order[i].includes('latte')) {
            latte.push(order[i]);
        } else {
            americano.push(order[i]);
        }
    }

    const result = latte.length * 5000 + americano.length * 4500;
    return result;
}
