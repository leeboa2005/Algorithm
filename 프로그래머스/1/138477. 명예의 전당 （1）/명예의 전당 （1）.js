function solution(k, score) {
    let answer = [];
    let hallOfFame = [];
    
    for( let i = 0; i < score.length; i++){
        hallOfFame.push(score[i]);
        hallOfFame.sort((a, b) => b - a);
        
       if (hallOfFame.length <= k) {
            answer.push(hallOfFame[hallOfFame.length - 1]);
        } else {
                 answer.push(hallOfFame[k - 1]);
                    if(score[i] > hallOfFame[k - 1]){
                     hallOfFame.pop();
            }
        }
    }
      return answer;
}