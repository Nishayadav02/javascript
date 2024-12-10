//basics of arrays , deep copy , shallow copy , methods of array

// const arr = [0 , 1 , 2 , 3 , 4 , 5];
// console.log(arr[1]);

// const myarr1 = ["this" , "is" , "a" , "dog"];
// const myarr2 = new Array(1 , 2 , 3 , 4)
// console.log(myarr2);

// const myarr = [1 , 2 , 3 , 4 , 5];
// console.log(myarr)
// myarr.push(6);
// myarr.push(7);
// console.log(myarr)
// myarr.pop();
// console.log(myarr);

// myarr.unshift(9);
// console.log(myarr);

// myarr.shift();
// console.log(myarr);

// console.log(myarr.includes(9))
// console.log(myarr.indexOf(9))

// const newarr = myarr.join()
// console.log(myarr);
// console.log(newarr);
// console.log(typeof newarr);

//slice , splice
// console.log("A " , myarr);
// const myn1 = myarr.slice(1 , 3);
// console.log(myn1);
// console.log("B " , myarr);

// const myn2 = myarr.splice(1 , 3);
// console.log("c " , myarr);
// console.log(myn2);



const marvel_heros = ["thor" , "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros)

const all_new_heros = [...marvel_heros , ...dc_heros]
// console.log(all_new_heros)

const another_arr  = [1 , 2 , 3 , [4 , 5 , 6] , 7 , [6 , 7 , [4 , 5]]]
const real_another_arr = another_arr.flat(Infinity)
console.log(real_another_arr)

console.log(Array.isArray("nisha"))
console.log(Array.from("nisha"))
console.log(Array.from({name :  "nisha"})) //important

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1 , score2 , score3))
