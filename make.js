module.exports = (function make(n) {
    const values = [n];
    function makeInternal(...args) {
      for (let i = 0; i < args.length; i += 1) {
        const arg = args[i];
        if (typeof arg === 'function') {
          return values.reduce(arg);
        }
        values.push(arg);
      }
      return makeInternal;
    }
    return makeInternal;
  }());
  function sum(a, b) {
      return a + b;
    }