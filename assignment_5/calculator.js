let a = prompt("Enter first number:");
let b = prompt("Enter second number :");

let operation = prompt("Choose operation : +,-,*,/");

let result;
if (operation === '+')
{
    result = Number(a) + Number(b)
}
else if(operation === '-')
{
     result = Number(a) - Number(b)
}
else if(operation === '*')
{
     result = Number(a) * Number(b)
}
else if(operation === '/')
{
     result = Number(a) / Number(b)
}
else 
{
    result = " Invalid operation! "
}

alert("Result :" + result)