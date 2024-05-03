function solution(n) {
  const str = String(n);
  const mapfn = (arg) => Number(arg);
  const newArr = Array.from(str, mapfn);
  let num = 0;
  let result = 0;

  newArr.sort(function (a, b) {
    return b - a;
  });
  num = newArr.join("");
  result = Number(num);
  return result;
}