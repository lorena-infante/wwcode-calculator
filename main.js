const result = document.getElementById('result');
const summary = document.getElementById('summary');
//aux variables
const numbersArr = [];
let joinedNums = [];
//operators
const del = 'del'
const add = '+'
const minus = '-'
const decimal = '.'
const divide = '/'
const times = 'x'
const reset = 'res';
const equals = '=';


/* let addBtn = document.querySelector('#add');
addBtn.addEventListener('click', showInput());

let minusBtn = document.querySelector('#minus');
minusBtn.addEventListener('click', addOperator());

let decimalBtn = document.querySelector('#decimal');
decimalBtn.addEventListener('click', addOperator());

let divideBtn = document.querySelector('#divide');
divideBtn.addEventListener('click', addOperator()); */



function showInput(input) {
    numbersArr.push(input);
    joinedNums = numbersArr.join('');
    
    summary.innerHTML = `${joinedNums}`;
}

function addOperator(operator) {
    if(operator === add){
        summary.innerHTML = `${joinedNums} ${add}`;
       
    }else if (operator === minus) {
        summary.innerHTML = `${joinedNums} ${minus}`;
        
    } else if (operator === decimal){
        summary.innerHTML = `${joinedNums} ${decimal}`;

    }else if (operator === divide){
        summary.innerHTML = `${joinedNums} ${divide}`;
        
    }else if (operator === times){
        summary.innerHTML = `${joinedNums} ${times}`;
       
    }else if (operator === del){
        summary.innerHTML = `${joinedNums} ${del}`;
        
    }else if (operator === equals){
        summary.innerHTML = `${joinedNums} ${equals}`;
        
    }else if (operator === reset){
        summary.innerHTML = `0`;
    }else {
        summary.innerHTML = `0`;
    }
}

function sum(){}
function reduce(){}
function multiply(){}
function div(){}
function res(){}
function dele(){}