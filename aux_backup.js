const result = document.getElementById('result');
const summary = document.getElementById('summary');
//aux variables
let numbersArr = [];
//let operatorsArr = [];
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

function onEqualsPress (){

}

function showInput(input) {
    let newInput = Number (input);
    if(newInput === Number){
        console.log(`esto es un input ${typeof(input)} ${input}. typeof(input) != Number ${typeof(input) != Number}`);
    }else { 
        console.log(`esto es un string ${input}` );
    }
   
    summary.innerHTML = input;
    // } else {
    //     numbersArr.push(input);
    //     joinedNumsOperators = numbersArr.join('');
    //     let numericJoinedNums = Number (joinedNums);
    
    //     if (numbersArr.length != 0) {
    //         summary.innerHTML = numericJoinedNums;
    //     } else {
    //         summary.innerHTML = 0;
    //     }
    //     if (input === reset) {
    //         resetScreen(input);
    //     }
     

    /*else if (input === equals) {
        console.log(joinedNums);
        if(joinedNums )
        result.innerHTML=`${joinedNums}`;
       
    }*/
    //return numericJoinedNums;

}


function resetScreen(input) {
    numbersArr = [];
    summary.innerHTML = `0`;
}



function sum() { }
function reduce() { }
function multiply() { }
function div() { }

function dele() { }


function addOperator(operator) {
    if (operator === add) {
        summary.innerHTML = `${joinedNums} ${add}`;

    } else if (operator === minus) {
        summary.innerHTML = `${joinedNums} ${minus}`;

    } else if (operator === decimal) {
        summary.innerHTML = `${joinedNums} ${decimal}`;

    } else if (operator === divide) {
        summary.innerHTML = `${joinedNums} ${divide}`;

    } else if (operator === times) {
        summary.innerHTML = `${joinedNums} ${times}`;

    } else if (operator === del) {
        summary.innerHTML = `${joinedNums} ${del}`;

    } else if (operator === equals) {
        summary.innerHTML = `${joinedNums} ${equals}`;

    } else if (operator === reset) {
        summary.innerHTML = `0`;
    } else {
        summary.innerHTML = `0`;
    }
}

