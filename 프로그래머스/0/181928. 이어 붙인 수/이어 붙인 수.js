function solution(num_list) {
    let even = '';
    let odd = '';

    even = num_list
        .filter((value) => {
            if (value % 2 === 0) {
                return value;
            }
        })
        .join('');

    odd = num_list
        .filter((value) => {
            if (value % 2 === 1) {
                return value;
            }
        })
        .join('');
    
    return Number(even) + Number(odd);
}