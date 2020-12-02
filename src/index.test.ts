import { add } from './index';

describe('function add', () => {
  it('should return correct value', () => {
    expect.assertions(1);
    console.log(add);
    const argument1 = 2;
    const argument2 = 3;
    const expectedResult = 5;

    expect(add(argument1, argument2)).toBe(expectedResult);
  });
});
