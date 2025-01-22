//implementing the addition function
function add(number1, number2) {
    return number1 + number2;
}
document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//implementing the subtraction function
function subtract(number1, number2) {
    return number1 - number2;
}
document.getElementById('subtract').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = subtract(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//implementing the multiplication function
function multiply(number1, number2) {
    return number1 * number2;
}
document.getElementById('multiply').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = multiply(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//implementing the division function
function divide(number1, number2) {
    return number1 / number2;
}
document.getElementById('divide').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = divide(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});

//retrieving user's inputs 
let firstnumber =document.getElementById("number1").value;
let secondnumber =document.getElementById("number2").value;

let number1 = parseFloat(firstnumber) || 0; // Default to 0 if empty or invalid
let number2 = parseFloat(secondnumber) || 0; // Default to 0 if empty or invalid