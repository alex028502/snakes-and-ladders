module.exports = function* () {
  while (true) {
    yield Math.floor(Math.random() * 6) + 1;
  }
};
