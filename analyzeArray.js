const analyzeArray = (array) => {
  const obj = {
    average: 0,
    min: array[0],
    max: 0,
    length: array.length,
  };

  array.forEach((num) => {
    num > obj.max ? (obj.max = num) : obj.min > num ? (obj.min = num) : "";
    obj.average += num / array.length;
  });

  obj.average = Math.round(obj.average);

  return obj;
};

/**
 * [1, 8, 3, 4, 2, 6]
 *  average: 4,
    min: 1,
    max: 8,
    length: 6,
 */

module.exports = analyzeArray;
