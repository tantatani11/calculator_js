function calc(){

const num1 = document.getElementById('n1').value;
const num2 = document.getElementById('n2').value;

const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

const sum = number1 + number2;

document.getElementById('ans').textContent = sum;
}