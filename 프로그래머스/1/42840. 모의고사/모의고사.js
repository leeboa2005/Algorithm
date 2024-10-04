function solution(answers) {
    let answer = [];
    let scores = [0, 0, 0];
    const personOne = [1, 2, 3, 4, 5];
    const personTwo = [2, 1, 2, 3, 2, 4, 2, 5];
    const personThree = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    for (let i = 0; i < answers.length; i++) {
        if (personOne[i % personOne.length] === answers[i]) {
            scores[0] += 1;
        }
        if (personTwo[i % personTwo.length] === answers[i]) {
            scores[1] += 1;
        }
        if (personThree[i % personThree.length] === answers[i]) {
            scores[2] += 1;
        }
    }

    const maxScore = Math.max(...scores);

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === maxScore) {
            answer.push(i + 1);
        }
    }

    return answer.sort((a, b) => a - b);
}
