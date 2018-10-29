module.exports = function sumOfOther(arr) {
  let sum = 0;
  arr.forEach((el) => {
    sum += el;
  });
  const arr1 = arr.map(el => sum - el);
  return arr1;
};
