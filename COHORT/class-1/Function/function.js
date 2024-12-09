/*function sum(num1 , num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of sum is : " + data);
}

function displayResultPassive(data) {
     console.log("Sum's result is : " + data);
}

// you are only allowed to call one function after this 

const ans = sum(1 , 2);
displayResult(ans);
displayResultPassive(ans);
*/


/*function sum(num1 , num2 , fnTOCall) {
    let result = num1 + num2;
    fnTOCall(result);
}

function displayResult(data) {
    console.log("Result of sum is : " + data);
}

function displayResultPassive(data) {
     console.log("Sum's result is : " + data);
}

// you are only allowed to call one function after this 

const ans = sum(1 , 2 , displayResult); //callbacks
*/

function sum(num1 , num2) {
    let result = num1 + num2;
    return result;
}

function displayResult(data) {
    console.log("Result of sum is : " + data);
}

displayResult(sum(1 , 2));
