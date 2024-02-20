// Main library exports - these are packaged in your distributable

/**
 * This function checks if a number is odd.
 *
 * @param {number} n - The number to check.
 * @returns {boolean} - Returns true if the number is odd, false otherwise.
 *
 * @example
 * isOdd(3); // returns true
 *
 * @example
 * isOdd(2); // returns false
 */
export const isOdd = (n) => {
  return !!(n & 1);
};
