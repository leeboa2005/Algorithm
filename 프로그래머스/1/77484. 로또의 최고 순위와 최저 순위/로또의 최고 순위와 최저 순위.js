function solution(lottos, win_nums) {
    let unknown_count = 0;
    let match_count = 0;

    for (let number of lottos) {
        if (number === 0) {
            unknown_count++;
        } else if (win_nums.includes(number)) {
            match_count++;
        }
    }

    const best_rank = 7 - (match_count + unknown_count);
    const worst_rank = 7 - match_count;

    return [best_rank > 6 ? 6 : best_rank, worst_rank > 6 ? 6 : worst_rank];
}
