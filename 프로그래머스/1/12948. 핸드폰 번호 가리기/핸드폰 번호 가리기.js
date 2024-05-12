function solution(phone_number) {
  const newStr = "*";

  for (let i = 0; i < phone_number.length - 4; i++) {
    const strArr = phone_number.split("");
    strArr[i] = newStr;
    phone_number = strArr.join("");
  }
  return phone_number;
}