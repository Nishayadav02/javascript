/*
synchroonous ->   together , one after the other , sequential 
                  onlu one thing happening at a time

Asynchronous -> opposite of synchronous
                happening in parts
                multiple things are context switching with each other

 */

/*
//synchronous
function findsum(n) {
    let ans = 0;
    for(let i = 0 ; i < n ; i++) {
        ans += i;
    }
    return ans;
}
console.log(findsum(100))
*/

//asynchronous function
// function findsum(n) {
//     let ans = 0;
//     for(let i = 0 ; i < n ; i++) {
//         ans += i;
//     }
//     return ans;
// }
// function findsumTill100() {
//     console.log(findsum(100));
// }
// setTimeout(findsumTill100 , 1000);
// console.log("hello world");


/*
function findsum(n) {
    let ans = 0;
    for(let i = 0 ; i < n ; i++) {
        ans += i;
    }
    return ans;
}
function findsumTill100() {
    console.log(findsum(100));
}
//busy waiting
function syncSleep() {
    let a = 1;
    for(let i = 0 ; i < 10000000000 ; i++) {
        a++;
    }
}
syncSleep();
//setTimeout(findsumTill100 , 1000);
console.log("hello world");
*/

/*const  fs = require("fs");
//filesystem module
fs.readFile("a.txt" , "utf-8" , function(err , data) {
    console.log(data);
})
console.log("hii there");
let a = 0;
for(let i = 0 ; i < 1000000 ; i++) {
    a++;
}
console.log("hii there 2");
*/


console.log("hii there");
setTimeout(function() {
    console.log("from inside async fn")
} , 2000);
setTimeout(function() {
    console.log("from inside async func")
} , 1000);
let a = 0;
for(let i = 0 ; i < 10 ; i++){
    a = a + 1;
}
console.log(a);