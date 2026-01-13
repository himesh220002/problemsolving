// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // suppose initially [12,13,14] -> 
  let first= "";
  let second= "";
  for(let i=0;i<array1.length;i++){
    first = first+array1[i];
  }
  let firstNumber = Number(first);
  for(let i=0;i<array2.length;i++){
    second = second+array2[i];
  }
  let secondNumber= Number(second);
  let sum = firstNumber+secondNumber;
  return sum;

  /** we figured join array elements into a string, then convert to number 
  * const first = Number(array1.join("")); 
  * const second = Number(array2.join("")); 
  * return first + second; 
  */
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {   //12321    -> a=0,1,2  ,b=4,3,2
  let stringValue= String(value);
  let a= 0,b = stringValue.length-1;
  while(a<b){
    if(stringValue[a]!= stringValue[b]){
      return false;
    }
    a++;
    b--;
  }
  return true;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  
  if(input == null ||input === ''){
    return "Required field";
  } 
  const num = Number(input);
  if(num === 0 || isNaN(num)){
    return "Must be a number besides 0";
  } 
  return "";
}
