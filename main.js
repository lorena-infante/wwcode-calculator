const result = document.getElementById('result');
const summary = document.getElementById('summary');
//aux variables
const numbersArr = [];
//operators
const del = 'del'
const add = '+'
const minus = '-'
const decimal = '.'
const divide = '/'
const times = 'x'
const reset = 'res';
const equals = '=';



function addNumber(number) {
    summary.innerHTML = `${number}`;
}

function addOperator(operator) {
    if(operator === add){
        console.log(`operator ${add}`);
    }else if (operator === minus) {
        console.log(`operator ${minus}`);
    } else if (operator === decimal){
        console.log(`operator ${decimal}`);
    }else if (operator === divide){
        console.log(`operator ${divide}`);
    }else if (operator === times){
        console.log(`operator ${times}`);
    }else if (operator === del){
        console.log(`operator ${del}`);
    }else if (operator === equals){
        console.log(`operator ${equals}`);
    }else if (operator === reset){
        console.log(`operator ${reset}`);
    }
}

function sum(){}
function reduce(){}
function multiply(){}
function div(){}
function res(){}
function dele(){}