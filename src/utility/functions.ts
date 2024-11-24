import { Range } from "./types";


// ---------------------------------------------------------------------------------------------------------------


export const getRandomExclusive = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomInclusive = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};


export const splitRangeIntoArray = (min:number, max:number, n:number): Range[] => {

    const step = (max - min) / n; // Calculate the size of each interval
    const result: Range[] = [];

    for (let i = 0; i < n; i++) {
      const intervalMin = min + i * step; // Calculate the starting point of the interval
      const intervalMax = i === n - 1 ? max : min + (i + 1) * step; // Ensure the last interval goes up to max

      result.push({
        min: Math.floor(intervalMin),   // Round the min value to integer (if needed)
        max: Math.floor(intervalMax)    // Round the max value to integer (if needed)
      });
    }

    return result;
  };