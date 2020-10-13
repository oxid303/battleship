export default (num, isHorizontal = false) => {
  const arr = [];

  if (typeof num !== 'number' || num < 10 || num > 100) {
    num = 10;
  }

  if (isHorizontal && num <= 26) {
    let str = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < num; i++) {
      arr.push(str[i]);
    }
    return arr;
  }

  if (isHorizontal) {
    num += 100;

    for (let i = 101; i <= num; i++) {
      arr.push(String(i));
    }
    return arr;
  }

  for (let i = 1; i <= num; i++) {
    arr.push(String(i));
  }
  return arr;
};