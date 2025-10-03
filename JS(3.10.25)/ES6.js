// let and const
let age=25;
age=25;
console.log(age)
const name1="Sree"
// name1="Sree"
console.log(name1)
const person={name:"Suba"}
person.name="Sree"
console.log(person.name)
// Traditional function
function sum(a, b) {
  return a + b;
}
// Arrow functions
const sumArrow=(a,b)=>a+b
console.log(sumArrow(5,5))

// Arrow function by using single parameter
const sqrt=X=>X**X
console.log(sqrt(2))

// Arrow functions by using no parameter
const greet = () => console.log("Hello!");

// Template literals
const names="Subasri"
const ages=22
// Interpolation
console.log(`My name is ${names} and I am ${ages} years old`)
// Multi line string
console.log(`This is line 1
  This is line 2`)

  // Spread and rest operator
  arr1=[1,2,3,4]
  console.log(...arr1,5,6)
  const obj1={a:1,b:2}
  const obj2={...obj1,c:3}
  console.log(obj2)
  function sum1(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum1(1, 2, 3, 4)); // 10


// Destructing - Extract values from arrays or objects into variables.
// Arrays
const number=[1,2,3,4]
const[first,second,third]=number
console.log(first,second,third)
// Objects
const person1={name:"Subasri",age1:21}
const{name,age1}=person1
console.log(name,age1)

// Default values
const{country="India"}=person1
console.log(country)


