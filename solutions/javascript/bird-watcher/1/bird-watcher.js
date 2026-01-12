// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let count = 0;
  for(let i=0;i<birdsPerDay.length;i++){
    count = count+ birdsPerDay[i];
  }
  return count;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  const start = (week-1)*7;
  const end = Math.min(start + 7, birdsPerDay.length);
  let count = 0;
  for(let i=start;i< end; i++){
    count = count + birdsPerDay[i];
  }
  
  return count;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  let count = 0;
  for(let i=0;i<birdsPerDay.length;i++){
    if(i%2===0){ // increment day 1, 3, 5, ...   coz the bird was in garden on the first day
      birdsPerDay[i]= birdsPerDay[i] + 1;
    }
    count = count + birdsPerDay[i];
  }
  return count;
}
