import mapKeys from 'lodash/mapKeys';
import camelCase from 'lodash/camelCase';
import snakeCase from 'lodash/snakeCase';
import isNil from 'lodash/isNil';

/**
 * checks if an email address is valid
 * @param {string} email input
 * @returns {boolean} true if valid, false if not
 * */
export const isValidEmail = (email: string): boolean => {
  const re =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()\\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

/**
 * Checks if a value is null or undefined or "null"
 * @param {T} value Value to check
 * @returns {boolean} true if value is null or undefined or "null"
 */
export function isInvalidValue<T>(value: T): boolean {
  return isNil(value) || (value as unknown as string) === 'null';
}

/**
 * Returns the same object with the keys camel cased
 * @param {Object} obj input object
 * @returns {Object} object with the keys camel cased
 * */
export const camelCaseObjectKeys = (
  obj: Record<string | number, unknown>,
): Record<string | number, unknown> => {
  return mapKeys(obj, (v, k) => camelCase(k));
};

/**
 * Returns the same object with the keys snake cased
 * @param {Object} obj input object
 * @returns {Object} object with the keys snake cased
 * */
export const snakeCaseObjectKeys = (
  obj: Record<string | number, unknown>,
): Record<string | number, unknown> => {
  return mapKeys(obj, (v, k) => snakeCase(k));
};

export function changedArray(a: Array<unknown> = [], b: Array<unknown> = []): boolean {
  return a.length !== b.length || a.some((item, index) => !Object.is(item, b[index]));
}
