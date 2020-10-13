export default (hNum, vNum) => {
  let arr = [];

  for (let v = 0; v < vNum; v++) {
    for (let h = 0; h < hNum; h++) {

      let square = {
        x: h,
        y: v,
        id: arr.length,
      };
      arr.push(square);
    }
  }

  return arr;
};