// An analyzeArray function that takes an array of numbers 
// and returns an object with the following properties: 
// average, min, max, and length.

function analyzeArray(arr) {
    return {
      average: getAverage(arr),
      min: getMin(arr),
      max: getMax(arr),
      length: arr.length,
    };
  }
  
  function getMin(arr) {
    return Math.min(...arr);
  }
  
  function getMax(arr) {
    return Math.max(...arr);
  }
  
  function getAverage(arr) {
    return arr.reduce((prev, cur) => (cur += prev)) / arr.length;
  }