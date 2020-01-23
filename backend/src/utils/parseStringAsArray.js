module.exports = function parseStringAsArray(string) {
  return string.split(",").map(t => t.trim());
};
