function removeChars(str, charsToRemove) {
  for (const char of charsToRemove) {
    str = str.split(char).join('');
  }
  return str;
}

const inputString = prompt('Enter a row:');
const charsToRemove = prompt('Enter simbols to remove (without spaces):').split('');

const resultString = removeChars(inputString, charsToRemove);

document.getElementById('remover').innerHTML = 'Result: ' + resultString;