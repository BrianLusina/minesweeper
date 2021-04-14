/**
 * Get a random number given a dimenstion
 * @param {Number} dimension
 */
export function getRandomNumber(dimension: number): number {
    return Math.floor((Math.random() * 1000) + 1) % dimension;
}
