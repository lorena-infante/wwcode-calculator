/* //output on screen
let totalResult = document.getElementById('result');
let summary = document.getElementById('summary');
let summDisplay;
// let joinedSumArray = summArray.join('');

//numeric keys pressed
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

//operator keys pressed
const del = document.getElementById('del');
const add = document.getElementById('add');
const minus = document.getElementById('minus');
const decimal = document.getElementById('decimal');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const reset = document.getElementById('reset');
const equals = document.getElementById('equals');

//aux funct
//function addNumberToScreen

//anonym functions
//aux numeric variable
let auxNumber;
let auxOperator;
let summArray = [];
five.addEventListener('click', () => {
    const stringToNumber = Number (five.innerHTML);
    console.log(`this is the number: ${stringToNumber}`);
    summArray.push(stringToNumber);
    joinedSumArray = Number(summArray.join(''));    
    //return stringToNumber and push
    summary.innerHTML = `${joinedSumArray}`;
    console.log(`${joinedSumArray}`);
    
    
   
})

add.addEventListener('click', () => {
    //  const stringToNumber = Number (five.innerHTML);
    summary.innerHTML = `${add.innerHTML}`;
    console.log(add.innerHTML);
})
 */

//only js
let promptNumberOne = prompt(`Escriba el primer número a operar`);
let promptNumberTwo = prompt(`Escriba el segundo número a operar`);
let promptOperation = prompt(`Escriba una operación a realizar:
"+", "-", "*", "/", "reset" `);
let nextOperation = prompt(`¿Desea realizar otra operación? si/no`);

let result;
const ADD = '+';
const SUBST = '-';
const MULTIPLY = '*';
const DIVIDE = '/';
const RESET = 'reset';
const YES = 'si';
const NO = 'no';

//Saving added nums

//choose operator
switch(promptOperation){
    case ADD:
        result = parseFloat(promptNumberOne) + parseFloat(promptNumberTwo);
        alert(`Esta es la suma de los dos números ${result}`);
        break;
    case SUBST:
        result = parseFloat(promptNumberOne)- parseFloat(promptNumberTwo);
        alert(`Esta es la resta de los dos números ${result}`);
        break;
    case MULTIPLY:
        result = parseFloat(promptNumberOne) * parseFloat(promptNumberTwo);
        alert(`Esta es la multiplicación de los dos números ${result}`);
        break;
    case DIVIDE:
        result = parseFloat(promptNumberOne) / parseFloat(promptNumberTwo);
        alert(`Esta es la división de los dos números ${result}`);
        break;
}