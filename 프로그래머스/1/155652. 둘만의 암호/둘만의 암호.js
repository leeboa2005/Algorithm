function solution(s, skip, index) {
    let answer = ''; 
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const filteredAlphabet = alphabet.split('').filter((char) => !skip.includes(char));


    for (const char of s) {

        let currentIndex = filteredAlphabet.indexOf(char);
        let newIndex = currentIndex; 


        for (let i = 0; i < index; i++) {
            newIndex++; 


            if (newIndex >= filteredAlphabet.length) {
                newIndex = 0; 
            }

            while (skip.includes(filteredAlphabet[newIndex])) {
                newIndex++; 
                if (newIndex >= filteredAlphabet.length) {
                    newIndex = 0; 
                }
            }
        }

        answer += filteredAlphabet[newIndex];
    }

    return answer;
}