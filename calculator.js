// A calculator object that contains functions
// for the basic operations:
// add, subtract, divide, and multiply.
// Each of these functions should take two numbers
// and return the correct calculation.

class Calculator {
    add(num1, num2) {
        return num1 + num2;
      }
    
      subtract(num1, num2) {
        return num1 - num2;
      }
    
      divide(num1, num2) {
        return num1 / num2;
      }
    
      multiply(num1, num2) {
        return num1 * num2;
      }
};

module.exports = Calculator
