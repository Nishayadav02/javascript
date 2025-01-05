const myNums = [1 , 2 , 3]

// const total = myNums.reduce(function (accumulator , currentValue) {
//     console.log(`Accumulator : ${accumulator} and current value : ${currentValue}`);
//     return accumulator + currentValue
// } )

// const total = myNums.reduce(function (accumulator , currentValue) {
//     console.log(`Accumulator : ${accumulator} and current value : ${currentValue}`);
//     return accumulator + currentValue
// }, 0 )

// const total = myNums.reduce( (accumuletor , currentValue) => accumuletor + currentValue , 0)

// console.log(total);


const shoppingCart = [
    {
        itemName: "js course",
        price: 1999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "cpp course",
        price: 2999
    },
    {
        itemName: "java course",
        price: 5999
    },
]

const payment = shoppingCart.reduce( (accumulator , item) => accumulator+ item.price , 0)

console.log(payment);
