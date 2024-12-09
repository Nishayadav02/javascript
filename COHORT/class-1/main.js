// console.log("hello");

// var a = 1;
// console.log(a);

// var a = 1;
// a = 2;
// console.log(a);

// let a = 1;
// a = 2;
// console.log(a);

// const a = 1;
// //a = 2;//this will through error
// console.log(a);

//note -> let is more prefered .

//data types -> string , numbers and booleans

// let Name = "Nisha";
// let age = 20;
// let isStudent = true;
// console.log("this person name is " + Name + " and her age is " + age);
// if(isStudent == true){
//     console.log(Name + " is a student");
// }
// else{
//     console.log(Name + " is not student");
// }

// let Name = "Nisha";
// let age = 20;
// let isStudent = "monkey";
// console.log("this person name is " + Name + " and her age is " + age);
// if(isStudent == true){
//     console.log(Name + " is a student");
// }
// if(isStudent == false){
//     console.log(Name + " is not student");
// }


// let answer = 0 ;
// for(let i = 0; i <= 100; i++){
//     answer = answer + i;
// }
// console.log(answer);

//complex primitives

/*
//write a program that prints all the even numbers in an array
let n = 10;
for(let i = 0; i < n; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}*/

// const ages = [21 , 22 , 23 , 24 , 25 , 26];
// for(let i = 0 ; i < ages.length ; i++){
//     if(ages[i] % 2 == 0){
//         console.log(ages[i]);
//     }
// }

//write a program to print the biggest number in an array

// const nums = [2 , 4, 5 , 1, 23 , 45 , 34 , 22];
// let max = nums[0];
// for(let i = 1 ; i < nums.length ; i++){
//     if(max < nums[i]){
//         max = nums[i];
//     }
// }
// console.log(max);

//write a program that print all the male people's first name given a complex object

/*const personArray = ["nirmal" , "wasing powder nirmal" , "nishu"];
const genderArray = ["male" , "male" , "female"];
for(let i = 0; i < personArray.length; i++){
    if(genderArray[i] == "male"){
        console.log(personArray[i]);
    }
}*/

/*  an example
const user1 = {
    Name: "nirmal",
    gender: "male"
}
console.log(user1["Name"])
console.log(user1["gender"])*/


/*const allusers = [
    {
        Name: "nirmal",
        gender: "male"
    },
    {
        Name: "niru",
        gender: "male"
    },
    {
        Name: "nisha",
        gender: "female"
    }
]
for(let i = 0;i < allusers.length; i++){
    if(allusers[i]["gender"] == "male") {
        console.log(allusers[i]["Name"])
    }
}*/

//users["name"] or users.name are same

/*// write a program that reverse all the elements of an array

const nums = [1,2,3,4,5,6,7,8,9];
let n = nums.length;
let left = 0 , right = n - 1;
while(left <= right){
    [nums[left] , nums[right]] = [nums[right] , nums[left]];
    left++;
    right--;
}
console.log(nums);
*/


                /*funtions*/

/*
//write a function that finds the sum of two numbers

function sum(a , b) {
   const s = a + b;
    return s;
    //alternative
    //return a + b;
}

const value = sum(1 , 2)
const value2 = sum(1 , 20)
console.log(value);
console.log(value2);
*/

//write another function that displays the result in a pretty format



