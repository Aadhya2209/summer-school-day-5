// 1.Varibale and Data types 

let myName = "Aadhya sharma";
const age = 19;
var isIntern = true;
let idNumber ;
let phoneNumber = null;

console.log(typeof myName);
console.log(typeof age);
console.log(typeof isIntern);
console.log(typeof idNumber);
console.log(typeof phoneNumber);

// 2.Hoisting Demo

console.log(a) //console shows : 'a' is not defined

let a;
console.log(a)
a=9; // console shows : undefined

console.log(b)
let b = 10; // console shows : can't access 'b' before initialization 

console.log(b)
var b=10; // console shows : undefined

// 3.User Greeting (Conditionals)

let myName = prompt("What is your name?");
let age = prompt("How old are you?");

age = Number(age);

if (age < 18)
{
    alert("Hey" + myName + ", you're a teen !");
} else if (age>18 && age <= 60){
    alert("Welcome" + myName + ", you're a Adult !");
} else {
    alert("Hello"+ myName + ", you're a senior citizen !")
}

// 4. Looping Numbers

// for loop
for (let i = 10; i <= 20; i++) 
    {
    console.log(i);
}

// while loop
let j = 5;
while (j <= 20) 
    {
    console.log(j);
    j += 5;
}

// do...while loop
let k = 20;
do 
{
    console.log(k);
    k--;
} while (k >= 5);

// 5. Function

// Function declaration
function add(a, b) {
    return a / b;
}

// Function expression
const square = function(num) {
    return num * num;
};

// Arrow function
const greet = (name) => `Hello, ${name}!`;


console.log(add(10, 5));       
console.log(square(4));       
console.log(greet("Aadhya Sharma"));


// 6. Callback Practice

function processNumber(num, callback) 
{
  callback(num);
}

processNumber(5, function(n) 
{
  console.log("Double is", n * 2);
});

