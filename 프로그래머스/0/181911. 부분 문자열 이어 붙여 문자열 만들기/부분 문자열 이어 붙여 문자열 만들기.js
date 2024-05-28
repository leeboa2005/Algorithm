function solution(my_strings, parts) {
    // slice를 사용하여 문자열을 잘라야하는데 
    // 모든 배열의 값이 반복되야함 
    
    let answer = '';
    for(let i=0; i < my_strings.length; i++){        
      answer = answer + my_strings[i].substring(parts[i][0],parts[i][1] + 1);
    }
    
    return answer;
}
