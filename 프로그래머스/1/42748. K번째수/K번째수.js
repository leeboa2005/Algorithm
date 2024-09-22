function solution(array, commands) {
    let answer = [];
    for (let c =0; c <commands.length; c++ ){
       const i = commands[c][0];
       const j = commands[c][1];
       const k = commands[c][2];

let slicedArray = array.slice(i -1 ,j);
        slicedArray.sort(function(a,b){
            return a - b;
        });
        
        answer.push(slicedArray[k - 1]);
        
    }
    
    return answer;
}
