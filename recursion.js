module.exports = function recursion(tree, lvl) {
  if (tree == null) return null;

  const curLvl = lvl || 0;
  const res = [];

  const arrL = recursion(tree.left, curLvl + 1);
  const arrR = recursion(tree.right, curLvl + 1);

  if (!res[curLvl]) {
    res[curLvl] = [];
  }
  res[curLvl].push(tree.value);

  if (arrL) {
    arrL.forEach((el, i) => {
      if (Array.isArray(el)) {
        res[i] = Array.isArray(res[i]) ? res[i].concat(el) : el;
      }
    });
  }
  if (arrR) {
    arrR.forEach((el, i) => {
      if (Array.isArray(el)) {
        res[i] = Array.isArray(res[i]) ? res[i].concat(el) : el;
      }
    });
  }
  return res;
};
