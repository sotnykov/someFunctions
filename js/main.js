function calculateAverage(arr) {
  let sum = 0;
  let count = 0;

  for (const item of arr) {
    if (!isNaN(item)) {
      sum += item;
      console.log('sum', sum);
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return sum / count;
}

// const mixedArray = [16, 37, 'e', 54, 4, 'd', 72, 56, 47, 4, -16, 'f', 25, -37, 46, 4, 'a', 51, 27, -63, 4, -54, 'b', 76, -4, 0, 12, -35, 'c', 4, 47];

let array = [];

let arrayLength = parseInt(prompt('Write a length of array:'));

for (let someNumber = 0; someNumber < arrayLength; someNumber++) {

  const element = parseInt(prompt(`Write an element ${someNumber + 1} in arrray:`));
  if (!isNaN(element)) {
    array.push(element);    
  }
};

document.getElementById('array').innerHTML = 'Array: ' + array.join(', ');

const average = calculateAverage(array);

document.getElementById('output').innerHTML = "Average of array is " + average;