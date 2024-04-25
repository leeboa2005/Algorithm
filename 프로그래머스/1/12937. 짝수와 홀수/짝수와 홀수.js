function solution(num) {
    let answer = '';
     if( num%2 == 0 ){
         answer = "Even";
         console.log (answer);
     }else{
         answer = "Odd";
         console.log (answer);
     }
     return answer
}

solution(10);