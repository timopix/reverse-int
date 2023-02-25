class Reverser {
  static reverse(n) {
    if (typeof n === 'string' || !Number.isInteger(n)) {
      throw new Error('Invalid argument');
    }
    const reversedStr = [...Math.abs(n).toString()].reverse().join('');
    const reversedNum = Number(reversedStr);
    return n >= 0 ? reversedNum : reversedNum;
  }
}

module.exports = Reverser.reverse;
