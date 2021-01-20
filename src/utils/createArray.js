/**
 * Creates an array of object of given length.
 * 
 * @param {Number} length 
 */
export const createArray = (length) => {
  let arr = [];
  for (let i = 0; i < (length || 5) ; i++) {
    arr[i] = {}
  }

  return arr;
}
