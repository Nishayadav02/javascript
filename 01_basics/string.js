// console.log("hello" + " world");

// const name = "nisha";
// let age = 20;
// console.log(name + " " + age)

// console.log(`hello my name is ${name} and my age is ${age}`);


const gameName = new String("Temple-run")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toLowerCase());
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('m'));

const newString = gameName.substring(0 , 4); 
console.log(newString);

const anotherString = gameName.slice(-8 , 4);
console.log(anotherString);

const newStirng1 = "   nisha   ";
console.log(newStirng1);
console.log(newStirng1.trim());

const url = "https://nisha.com/nisha%20yadav";
console.log(url.replace('%20' , '-'));
// console.log(url);
console.log(url.includes('nisha'));

console.log(gameName.split('-'))
