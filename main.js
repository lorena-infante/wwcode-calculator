//output on screen
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

five.addEventListener('click', () => {
    const stringToNumber = Number (five.innerHTML);
    console.log(`this is the number: ${stringToNumber}`);
    //  summArray.push(stringToNumber);
    //  joinedSumArray = summArray.join('');    
    //return stringToNumber and push
    summary.innerHTML = `${stringToNumber}`;
   
})

add.addEventListener('click', () => {
    //  const stringToNumber = Number (five.innerHTML);
    summary.innerHTML = `${add.innerHTML}`;
    console.log(add.innerHTML);
})