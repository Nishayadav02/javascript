// function_name()  ==> execution
// function_name ==> reference

// function add2numbers(number1 , number2) {
//     console.log(number1 + number2);
// }

// add2numbers(3 , 4)
// add2numbers(3 , "4")
// add2numbers(3 , "a")
// add2numbers(3 , null)

// const result = add2numbers(2 , 5)
// console.log("Result : ", result)


// function add2numbers(number1 , number2) {
//     let result =  number1 + number2;
//     return result;
// }

// function add2numbers(number1 , number2) {
//     return number1 + number2;
// }

// const result = add2numbers(2 , 5)
// console.log("Result : ", result)


// function loginUserMessage(username) {
//     if(username === undefined){   //(!username)
//         console.log("please enter a username");
//         return;
//     }
//     return `${username} just logged in`
// }

// // console.log(loginUserMessage("nisha"))
// // console.log(loginUserMessage(""))
// console.log(loginUserMessage())


function loginUserMessage(username = "nishu") {
    if(username === undefined){   //(!username)
        console.log("please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("nisha"))
// console.log(loginUserMessage(""))
console.log(loginUserMessage())