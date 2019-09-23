console.log("Hello World");

let name = 'Mosh';
console.log(name);

const interestRate = 0.3;
console.log("Interest Rate constant=" +interestRate)

let age = 30; // number literal
let isApproved = false // boolean literal
let firstName;  // string literal, by default value = undefined
let lastName = null;

// object type 
let person = {
    name: 'Mosh', // key value pair
    age: 30
}; //object literal

console.log(person)

// ways to access object

//1. using dot(.) notation
console.log(person.name);
//2. using bracket notation
person['name'] = 'Mary' // useful when selecting target property at runtime
console.log(person.name)

let selection = 'name'
person[selection] = 'Madhu'
console.log(person[selection])

// array literal
let selectedColors = ['red','blue'];
console.log(selectedColors);
console.log(selectedColors[2]) //undefined
selectedColors[2] = 4
console.log(selectedColors[2])

//array properties
console.log(selectedColors.length)


//functions
function greet(name) { //name is the parameter
    console.log("Hello "+name);
}

greet('John'); //argumentds

//difference between parameter and argument, 
//parameter is the variables which are present in a function definition, they can be accessed only within the function
//argument is the value which is passed during function calling

function greet2(name, lastName){
    console.log("Hello "+name+" "+lastName)
}

greet2('John','Grisham');

greet2('Amol');

//types of function
//perform a task
// or calculate a value

function square(number){
    return (number * number);
}

let squareOfNumber = square(4);
console.log("The square of 4 is: "+squareOfNumber);



