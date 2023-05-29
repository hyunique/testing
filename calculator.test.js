const Calculator = require('./calculator')
describe("Calculator basic operations", () => {
    let calculator;
  
    beforeEach(function () {
      calculator = new Calculator();
    });
  
    test("Add", () => {
      expect(calculator.add(1, 2)).toEqual(3);
    });
    test("Subtract", () => {
      expect(calculator.subtract(5, 2)).toEqual(3);
    });
    test("Divide", () => {
      expect(calculator.divide(15, 5)).toBeCloseTo(3);
    });
    test("Multiply", () => {
      expect(calculator.multiply(1, 3)).toEqual(3);
    });

  });