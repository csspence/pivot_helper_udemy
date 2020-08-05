/*
JavaScript Algorithms and Data Structures Masterclass
Pivot Helper
Create a function pivotHelper that accepts an array and makes the first element of that array a pivot.  It should arrange the array (in place) such that the numbers to the left of the pivot are less than the pivot and so the numbers to the right of the pivot are greater than the pivot.  pivotHelper returns the final index of the pivot.
*/

const pivotHelper = (arr) => {
  let index = 0;
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < arr[0]) {
      index++;
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  if(index > 0) {
    let holder = arr[0];
    arr[0] = arr[index];
    arr[index] = holder;
  }
  console.log('here is arr: ' + arr);
  return index;
}