//singleton

//constructor -> singleton
//object.create

//literals -> no singleton , there are multiple instances

//objects literals
/*const user = {
    name: "nisha",
    "full name": "nisha yadav",
    age: 20,
    location: "knapur",
    email: "nishayadav@email.com", 
    isLoggedIn:false,
    lastLoginDay: ["monday" , "saturday"]
}

console.log(user.name)
console.log(user["name"])
console.log(user["full name"])
console.log(user.mySymbol)
console.log(typeof user.mySymbol)
*/

/*const mySymbol1 = Symbol("key1")
const mySymbol2 = Symbol("key2")

const user = {
    name: "nisha",
    "full name": "nisha yadav",
    mySymbol1: "mykey1", //this syntex is not correct
    [mySymbol2]: "mykey2", //this is correct syntex for symbols
    age: 20,
    location: "knapur",
    email: "nishayadav@email.com", 
    isLoggedIn:false,
    lastLoginDay: ["monday" , "saturday"]
}
console.log(user.mySymbol1)
console.log(typeof user.mySymbol1)
console.log(user[mySymbol2])
*/
/*
const mySymbol2 = Symbol("key2")
const user = {
    name: "nisha",
    "full name": "nisha yadav",
    [mySymbol2]: "mykey2",
    age: 20,
    location: "knapur",
    email: "nishayadav@email.com", 
    isLoggedIn:false,
    lastLoginDay: ["monday" , "saturday"]
}

console.log(user[mySymbol2])
console.log(typeof user[mySymbol2])

user.email = "nisha@email.com"
Object.freeze(user)
user.email = "nisha20@gmail.com"
console.log(user)
*/

const mySymbol2 = Symbol("key2")
const user = {
    name: "nisha",
    "full name": "nisha yadav",
    [mySymbol2]: "mykey2",
    age: 20,
    location: "knapur",
    email: "nishayadav@email.com", 
    isLoggedIn:false,
    lastLoginDay: ["monday" , "saturday"]
}

// console.log(user[mySymbol2])
// console.log(typeof user[mySymbol2])

// user.email = "nisha@email.com"
// Object.freeze(user)
// user.email = "nisha20@gmail.com"
// console.log(user)

user.greeting = function() {
    console.log("hello inside function");
}

user.greeting2 = function() {
    console.log(`hello inside  , ${this.name}`);
}

// console.log(user.greeting)
console.log(user.greeting())
console.log(user.greeting2())