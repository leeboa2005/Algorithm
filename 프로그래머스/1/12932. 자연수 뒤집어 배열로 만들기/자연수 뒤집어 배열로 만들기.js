function solution(n) {
  const str = String(n);
  const mapfn = (arg) => Number(arg);
  const newArr = Array.from(str, mapfn);
  const result = newArr.reverse();

  return result;
}

