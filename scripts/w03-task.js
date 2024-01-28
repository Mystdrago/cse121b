/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

document.querySelector('#addNumbers').addEventListener('click', function () {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
});
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2) {
    return number1 - number2;
};

document.querySelector('#subtractNumbers').addEventListener('click', function () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
});

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

document.querySelector('#multiplyNumbers').addEventListener('click', () => {
    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
});

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

document.querySelector('#divideNumbers').addEventListener('click', () => {
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    // Check for division by zero, there should be an instruction for this I played with it and crashed something before I added this.
    if (divideNumber2 !== 0) {
        document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
    } else {
        alert("Cannot divide by zero!");
    }
});

/* Decision Structure */
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#getTotal').addEventListener('click', function () {
        let subtotalValue = parseFloat(document.querySelector('#subtotal').value);

        let applyDiscount = document.querySelector('#member').checked;

        
        if (applyDiscount) {
            subtotalValue *= 0.8; 
        }

        let totalElement = document.querySelector('#total');
        totalElement.textContent = subtotalValue.toFixed(2);
    });
});

/* ARRAY METHODS - Functional Programming */
document.addEventListener('DOMContentLoaded', function () {
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector('#array').textContent = numbersArray.join(', ');
/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(number => number % 2 === 1);
    document.querySelector('#odds').textContent = oddNumbers.join(', ');
/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(number => number % 2 === 0);
    document.querySelector('#evens').textContent = evenNumbers.join(', ');
/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((sum, number) => sum + number, 0);
    document.querySelector('#sumOfArray').textContent = sumOfArray;
/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(number => number * 2);
    document.querySelector('#multiplied').textContent = multipliedArray.join(', ');
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
    document.querySelector('#sumOfMultiplied').textContent = sumOfMultiplied;
});