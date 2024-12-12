// const user = new Object()
// console.log(user)

/*
const user = {}

user.id = "122abc"
user.name = "nisha"
user.isLoggedIn = false
console.log(user)
*/

/*const user = {
    email: "nisha@gmail.com",
    fullname: {
        userfullname: {
            firstname: "nisha",
            lastname: "yadav"
        }
    }
}

console.log(user.fullname)
console.log(user.fullname.userfullname)
console.log(user.fullname.userfullname.firstname)
console.log(user.fullname.userfullname.lastname)
*/

/*const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "c" , 4: "d"}

// const obj3 = {obj1 , obj2}  //not correct
// const obj3 = Object.assign({} , obj1 , obj2);
const obj3 = {...obj1 , ...obj2}
console.log(obj3)
*/


const user = {}

user.id = "122abc"
user.name = "nisha"
user.isLoggedIn = false

const users = [
    {
        id: 1,
        email: "nisha@gmail.com"
    },
    {
        id: 1,
        email: "nisha@gmail.com"
    },
    {
        id: 1,
        email: "nisha@gmail.com"
    },

]
users[1].email
console.log(user)
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty('isLoggedIn'))
console.log(user.hasOwnProperty('isLogged'))