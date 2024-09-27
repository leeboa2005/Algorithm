function solution(a, b, n) {
    let answer = 0; 

    while (n >= a) {
        const colaReceived = Math.floor(n / a) * b; 
        answer += colaReceived; 
        n = (n % a) + colaReceived; 
    }

    return answer; 
}