import { camelCaseObjectKeys, snakeCaseObjectKeys, isValidEmail, isInvalidValue } from './utils';

describe('Utils', () => {
  describe('camelCaseObjectKeys', () => {
    it('should return an object with camelCase keys', () => {
      const input = {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
      };
      const expected = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
      };
      const result = camelCaseObjectKeys(input);
      expect(result).toEqual(expected);
    });
  });

  describe('snakeCaseObjectKeys', () => {
    it('should return an object with snakeCase keys', () => {
      const input = {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
      };
      const expected = {
        first_name: 'John',
        last_name: 'Doe',
        age: 30,
      };
      const result = snakeCaseObjectKeys(input);
      expect(result).toEqual(expected);
    });
  });

  describe('isEmailValid', () => {
    it('should return false for invalid emails', () => {
      const invalidEmail = 'johndoe@';
      const result = isValidEmail(invalidEmail);
      expect(result).toEqual(false);
    });

    it('should return true for valid emails', () => {
      const validEmail = 'johndoe@example.com';
      const result = isValidEmail(validEmail);
      expect(result).toEqual(true);
    });
  });

  describe('isInValidValue', () => {
    it('should return true for null', () => {
      const invalidValue = null;
      const actual = isInvalidValue(invalidValue);
      const expected = true;

      expect(actual).toEqual(expected);
    });

    it('should return true for undefined', () => {
      const invalidValue = undefined;
      const actual = isInvalidValue(invalidValue);
      const expected = true;
      expect(actual).toEqual(expected);
    });

    it('should return true for `null`', () => {
      const invalidValue = 'null';
      const actual = isInvalidValue(invalidValue);
      const expected = true;
      expect(actual).toEqual(expected);
    });

    it('should return false for `Jane`', () => {
      const validValue = 'Jane';
      const actual = isInvalidValue(validValue);
      const expected = false;
      expect(actual).toEqual(expected);
    });

    it('should return false for valid objects', () => {
      const validValue = { name: 'Jane' };
      const actual = isInvalidValue(validValue);
      const expected = false;
      expect(actual).toEqual(expected);
    });
  });
});
