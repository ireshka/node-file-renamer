import { validatePattern } from './validators';

describe('validate Pattern', () => {
  it('should return true for correct pattern', () => {
    expect.assertions(1);
    const correctPattern1 = 'photo-$$$';
    expect(validatePattern(correctPattern1)).toBeTruthy();
  });

  it('should return false for incorrect pattern', () => {
    // use each table
    expect.assertions(1);
    const incorrectPattern = 'photo$';
    expect(validatePattern(incorrectPattern)).toBeFalsy();
  });
});
