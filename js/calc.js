function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    case '/':
      if (y === 0) {
        return ' Dividing by 0!';
      };
      return x / y;
    case '%':
      return x % y;
    case '^':
      return Math.pow(x, y);
    default:
      return 'Wrong value of operator!';
  };
};

const x = parseFloat(prompt('Write a first number: '));

const znak = prompt("Write an operator: +, -, *, /, %, ^:");

const y = parseFloat(prompt('Write a second number:'));

const result = doMath(x, znak, y);

document.getElementById('math-operator').innerHTML = `Result: ${x} ${znak} ${y} = ` + result;