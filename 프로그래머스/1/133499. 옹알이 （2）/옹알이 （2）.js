function solution(babbling) {
    let answer = 0;
    const say = ['aya', 'ye', 'woo', 'ma'];

    for (let i = 0; i < babbling.length; i++) {
        let word = babbling[i];
        let canSpeak = true;
        let lastSay = '';

        while (canSpeak) {
            canSpeak = false;
            for (let j = 0; j < say.length; j++) {
                if (word.startsWith(say[j]) && lastSay !== say[j]) {
                    word = word.slice(say[j].length);
                    lastSay = say[j];
                    canSpeak = true;
                    break;
                }
            }
        }
        if (word.length === 0) {
            answer++;
        }
    }
    return answer;
}
