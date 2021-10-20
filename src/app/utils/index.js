export const getXNames = num => {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(str.substr(0, num));
};

export const getYNames = num => {
  const arr = [];

  for (let i = 1; i <= num; ++i) {
    arr.push(String(i));
  }
  return arr;
};