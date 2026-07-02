function calc(){

const num1 = document.getElementById('n1').value;
const num2 = document.getElementById('n2').value;
const num3 = document.getElementById('n3').value;

const number1 = parseFloat(num1);
const number2 = parseFloat(num2);
const number3 = parseFloat(num3);


const sum = number1 + number2 + number3;

document.getElementById('ans').textContent = sum;
}