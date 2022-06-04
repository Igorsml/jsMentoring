const functions = {
  right1: function factorial(num) {
    if (num === 0) {
      return 1;
    }
    return num * factorial(num - 1);
  },

  wrong1: function factorial(num) {
    if (num === 1) {
      return 1;
    }
    return num * factorial(num - 1);
  },

  wrong2: function factorial3(num) {
    if (num === 0) {
      return 1;
    }
    if (num < 4) {
      return num * factorial3(num - 1);
    }

    return num;
  },

  wrong3: function factorial4(num) {
    if (num === 0) {
      return 1;
    }
    if (num === 2) {
      return 2;
    }
    if (num > 1) {
      return num * factorial4(num - 1);
    }
    return 0;
  },
};

export default functions[process.env.FUNCTION_VERSION];