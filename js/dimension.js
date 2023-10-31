function fillArray(rows, cols) {
  const result = [];
  for (let loopForRowsNumber = 0; loopForRowsNumber < rows; loopForRowsNumber++) {
    const rowsArray = [];
    for (let loopForColsNumber = 0; loopForColsNumber < cols; loopForColsNumber++) {
      const value = prompt(`Enter the value of element (${loopForRowsNumber}, ${loopForColsNumber}):`);
      rowsArray.push(value);
    }
    result.push(rowsArray);
  }
  return result;
}

const rows = parseInt(prompt('Enter a quantity of rows:'));
const cols = parseInt(prompt('Enter a quantity of columns:'));

const userArray = fillArray(rows, cols);

let matrixHTML = '';

for (let forMatrix = 0; forMatrix < userArray.length; forMatrix++) {
  let row = '';
  for (let forMatrixElement = 0; forMatrixElement < userArray[forMatrix].length; forMatrixElement++) {
    row += userArray[forMatrix][forMatrixElement] + '\t';
  }
  matrixHTML += row + '</br>';
}

document.getElementById('custom-array').innerHTML = 'Your two-dimensional array:</br>' + matrixHTML;