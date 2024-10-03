function solution(k, m, score) {
    const count = new Array(k + 1).fill(0);

    for (let s of score) {
        count[s]++;
    }

    let total = 0;

    for (let i = k; i >= 1; i--) {
        const apples = count[i];
        const boxCount = Math.floor(apples / m);

        total += boxCount * (i * m);

        count[i - 1] += apples % m;
    }

    return total;
}