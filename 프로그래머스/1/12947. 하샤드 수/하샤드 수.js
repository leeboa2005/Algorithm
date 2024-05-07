function solution(x) {
  const str = String(x);
  const mapfn = (arg) => Number(arg);
  const newArr = Array.from(str, mapfn);
  let sum = 0;

  newArr.forEach((num) => {
    sum += num;
  });

  if (x % sum == 0) {
    return true;
  } else {
    return false;
  }
}


