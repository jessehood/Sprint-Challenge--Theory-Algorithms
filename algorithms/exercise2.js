/**
 * Exercise 2a
 * @param {Array<Number>} values 
 * @returns {Number} (max)
 */
function exercise2a(values = []) {
  let max = 0;

  for (let i = 0; i < values.length; i++) {
    const j = i + 1;
    const result = values[j] - values[i];
    if (max < result) max = result; 
  }

  return max;
}
