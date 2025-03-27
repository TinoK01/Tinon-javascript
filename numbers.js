 let number = 100;

// Both statements will add 10
number = number + 10;
number += 10;

console.log (number);
// Prints: 120

let age = 7;

// string concatenation
'Tommy is ' + age + ' years old.';

//string interpolation
'Tommy is $(age) years old.`;

const currency = `$`;
let userIncome = 85000;

console.log(currency + userIncome) + ` is more than the average income.`;
// Prints: $85000 is more than the average income.

var a;

console.log(a);
// Prints: undefined

// Example of variables
let name = "Tammy";
const found = false;
var age = 3;
console.log(name), found, age);
// Prints: Tammy false 3

var age;
let weight;
const numberOFFingers = 20;

let name = "Codecademy";
console.log(`Hello, $(name)`);
// prints: Hello, Codecademy

console.log(`Billy is $(6+8 years old.`);
// Prints: Billy is 14 years old.

let count;
console.log(count); // Prints: undefined
count = 10;
console.log(count); // Prints: 10

const numberOfColumns = 4;
numberOfColumns = 8;
// TypeError: Assignment to constant variable.

let service = `credit card`;
let month = `May 30th`;
let displayText = `Your ` + service + ` bill is due on ` + month + `.`;

console.log(displayText);
// prints: Your credit card bill is due on May 30th.

console.log(`Hi there!);
// Prints: Hi there!

// Returns a number between 0 and 1
Math.random(), 

Math.random();
// ☝️ Math is the built-in object

let amount = 6;
let price = 4.99;

let messege = 'good nite';
console.log(message.length);
// Prints: 9

console.log('howdy'.length);
// Prints: 5

let lateToWork = true;

console.log(Math.random() );
// Prints: 0 - 0.9999999999999999

console.log(Math.floor(5.95));
// Prints: 5

// This line will denote a comment

let x = null;

let single = 'Wheres my bandit hat?';
let double = "Wheres my bandit hat?";

// Addition
5 + 5
// Subtraction
10 - 5
// Multiplication
5 * 10
// Division
10 / 5
// Modulo
10 % 5

/*
The below configuration must be changed before deployment.
*/

let baseUrl = 'localhost/taxwebapp/country';

// calculates # of weeks in a year, rounds down to nearest integer
const weeksInYear = Math.floor(365/7);

// calcuates the number of days left over after 365 is divded by 7
const daysLeftOver = 365 % 7 ;

console.log ("A year has " + weeksInYear + " weeks and " + days");

true || false;        // true
10 > 5 || 10 > 20;    // true
false || false;       // false
10 > 100 || 10 > 20;  // false

let price = 10.5;
let day = "Monday";

day == "Monday" ? price -= 1.5 : price += 1.5;

const isTaskCompleted = false;

if (isTaskCompleted)  {
  console.log('Task compeleted');
} else {
  console.log(Task incomplete');
}

true && true;      // true
1 > 2 && 2 > 1;    // false
true && false;     // false
4 === 4 && 3 > 1;  // true

const food = 'salad';

switch (food) {
  case 'oyster':
    console.log('The taste of the sea 🦪');
    break;
  case 'pizza':
    console.log('A delicious pie🍕');
    break;
  default:
    console.log('Enjoy your meal');
}

// Prints: Enjoy your meal

const isMailSent = true;

if (isMailSent) {
  console.log('Mail sent to recipient');
}

let lateToWork = true;
let oppositeValue = !lateToWork;

console.log(oppositeValue);
// Prints: false

1 > 3       // false
3 > 1       // true
250 >= 250  // true
1 === 1     // true
1 === 2     // false
1 === '1'   // false

const size = 10;

if (size > 100) {
  console.log('Big');
} else if (size > 20) {
  console.log('Medium');
} else if (size > 4) {
  console.log('small');
} else {
  console.log['Tiny'];
}
// Print: Small

// Arrow function with two parameters
const sum = (firstParam, secondParam) => {
  return firstParan + secondParam;
};
console.log(sum(2,5))); // Prints: 7

// Arrow function with no parameters
const printHello = () => {
  console.log ('hello');
};
printHello(); // Prints: hello

// Arrow functions with a single parameter
const checkweight = weight => {
  console.log('baggage weight : $(weight) kilograms.')
};
checkweight (25); // Prints: Baggage weight : 25 kilograms


// Concise arrow Functions 
const miltiply = (a, b) => a *b;
console.log(multiply(2, 30)); // Prints 60

// Defining the functions
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function:
sum(3, 6), // 9

// Named function 
function rocketToMars () {
  return 'BOOM!';
}

// Anonymous function
const rocketToMars = function() {
  return 'BOOM!';
}

const dog = function() {
  return 'Woof!'
}

// The parameter is name
function sayHello(name) {
  return 'Hello, $(name)!';
}

// With return 
function sum(num1, num2) {
  return num1 + num2;
}

// without return, so the fucntion doesn't output the sum
function sum(num1, num2) {
  num1 + num2;
}

function add(num1, num2) {
  return num1 + num2;
}

// Defining the function
function sum(num1, num2) {
  return num1 + num2;
}

// Calling the function
sum(2, 4); // 6

function myfunction() {

  var pizzaName = "Volvo";
  // Code here can use pizzaName

}

// Code here can't use pizzaName

const isLoggedIn = true;

if (isLoggedIn == true) {
  const statusMessage =  'User is logged in.';
}

console.log(statusMessage);

// Uncaught ReferenceError: statusMessage is not defined

// Variable declared globally
const color = 'blue';

fucnction printColor() {
  console.log(color);
}

printColor(); // Prints. blue

const numbers = [1, 2, 3, 4];

numbers.length // 4

// Accesing an array element
const myArray = [100, 200, 300];

console.log(myArray[0]); // 100
console.log(myArray[1]); // 200
console.log(myArray[2]); // 300

// Adding a single element;
const cart = ['apple', 'orange'];
cart.push('pear');

// Adding multiple elements:
const numbers = [1, 2];
numbers.push(3, 4, 5);

const ingredients = ['eggs', 'flour', 'chocolate'];

const poppedIngredient = ingredients.pop(); // 'chocolate'
console.log(ingredients); // ['eggs', 'flour']

const names = ['Alice', 'Bob'];

names.push('Carl');
// ['Alice', 'Bob', 'Carl']

// An array containing numbers
const numberArray = [0, 1, 2, 3];

// An array containing different data types
const mixedArray = [1, 'chicken', false],

const items = ['apricot', 'banana', 'cherry'];

for (let i = items.length - 1; i >= 0; i -= 1) {
  console.log('$(i). $(items[i])}');
}

// Prints 2. cherry
// Prints: 1. banana
// Prints: 0. apricot

x = 0
i = 0

do {
  x = x + i;
  console.log(x)
  i++;
} while (i < 5);

// Prints 0 1 3 6 10

for (let i = 0; 1 < 4; i += 1) {
  console.log(i);
};

// output: 0, 1, 2, 3

for (let i = 0; i < array.length; i++){
  console.log(array[i]);
}

// Output: Every item in the array

for (let i = 0; i < 99; i +=1) {
  if (i > 5) {
    break;
  }
  console.log(i)
}

// Output: 0 1 2 3 4 5

for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner +=) {
    console.log('$(outer)-${inner}`);
  }
}

/*
Output:
0-0
0-1
0-2
1-0
1-1
1-2
*/

while(condition) {
  // code block to be executed
}

let i = 0;

while(i < 5) {
  console.log(i);
  i++;
}

const arrayOfnumbers = [1, 2, 3, 4];

const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
  return acculator + currentValue;
});

console.log(sum); // 10

const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {
  console.log(number);
});

const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {
  return n > 5;
});

const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// add string after each final participant
const announcements = finalParticipants.map(member => {
  return member + ' joined the contest.';
})

console.log(announcements);

let plusFive = (number) => {
  return number + 5;
};
// f is assigned the value of plusfive
let f= pluFive;

plusFive(3); // 8.
// Since f has  a function value, it can be invoked.
f(9); // 14

const isEven = (n) => {
  return n % 2 == 0;
}

let printMsg = (evenFunc, num) => {
  const isNumEven = evenFunc(num);
  console.log('The number $ (num) is an even number: $(isNumEven).')
}

// Pass in isEven as the callback function
printMsg/isEven, 4);
// Prints: The number 4 is an even number: True.

//Assign a  function to a variable originalFunc
const originalFunc = (num) => { return num + 2 };

//Re-assign the function to a new variable newFunc
const newFunc = originalFunc;

//Acces the function's name property
newFunc.name; //'originalFunc'

//Return the fucntion's body as a string
newFunc.toString(); //'(num) => { return num + 2 }'

//Add our own isMathFunction property to the fucntion
newFunc.isMathFunction = true;

//Pass the fucntion as an argument
const fucntionNameLength = (func) => { return func.name.length };
functionNameLength(originalFunc); //12

//Return the function
const returnFunc = () => { return newFunc };
returnFunc(); //[Function: originalFunc]

const rubiksCubeFacts = {
  possiblePermutations: '43,252,003,274,489,856,000',
  invented: '1974',
  largestCube: '17x17x17'
};
const {possiblePermutations, invented, largestcCube} = rubiksCubeFacts;
console.log(possiblePermutations); // '43,252,003,274,489,856,000'
console.log(invented); // '1974'
console.log(largestCube); // '17x17x17'

const activity = 'Surfing';
const beach = { activity };
console.log(beach); // { activity: 'Surfing' }

const cat = {
  name: 'Pipey',
  age: 8,
  whatname() {
    return this,name
  }
};

console.log(cat.whatName());
// Output: Pipey

const restaurant = {
  numCustomers: 45,
  seatCapacity: 100,
  availableSeats() {
    // this refers to the restaurant object
    // and it's used to access its properties
   return this.seatCapacity - this.numCustomers;
  }
}

const myObj = {
    data: 'abc',
    loggerA: () => { console.log(this.data); },
    loggerB() { console.log(this.data); },
};

myObj.loggerA();    // undefined
myObj.loggerB();    // 'abc'

const myCat = {
  _name; 'Snickers',
  get name() {
    return this-_name
  },
  set name(newName) {
    //Verify that newName is a non-empty string before setting as name property
    if (typeof newName === 'string' && newName.length > 0) {
      this._name = newName;
    } else {
      cconsole.log("ERROR: name must be a non-empty string");
    }
  }
}

// A factory function that accepts 'name',
// 'age', and 'breed' parameters to return
// a customized dog object.
const dogFactory = (name, age, breed) => {
  return {
    name: name,
    age: age,
    breed: breed,
    bark() {
      console.log('Woof!');
    }
  };
};

const myCat = {
  _name; 'Dottie',
  get name() {
    return this._name
  },
  set name(newName) {
    this._name = newName;
  }
};

// reference invokes the getter
console.log(myCat.name);

// Assigment invokes the setter
myCat.name = 'Yankee';

// Example of invalid key names
const trainSchedule = {
  platform num: 10, // invalid because of the space between words.
  40 - 10 + 2: 30, // Expressions cannot be keys.
  +compartment: 'C' // The use of a + sign is invalid unless it is enclosed in quotations.
}

const apple = {
  color: 'Green',
  price: {
    bulk: '$3/kg',
    smallQty: '$4/kg'
  }
};
console.log(apple.color); // 'green'
console.log(apple.price.bulk); // '$3/kg'

const classElection = {
  date: 'January 12'
};

console.log(classElection.place); // undefined

const student = {
  name; 'Sheldon',
  score: 100,
  grade; 'A',
}

console.log(student)
// { name: 'Sheldon', score: 100, grade: 'A' }

delete student.score
student.grade = 'F'
console.log(student)
// { name: 'Sheldon', grade: 'F' {

student = {}
// TypeError: Assignment to costant variable.

let mobile = {
  brand: 'Samsung'
  model: 'Galaxy Note 9'
};

for (let key in mobile) {
  console.log('${key}: ${mobile[key]}');
}

const classof2018 = {
  students. 38,
  year: 2018
}

const person = {
  firstname: "Matilda",
  age. 27,
  hobby: "khnitting",
  goal: "learning javascript"
};

delete perso.hobby; // or delete person[hobby];

console.log(person);
/*
{
  firstname: "Matilda"
  age: 27
  goal: "learning Javascript"
}
*/


const prigNum = 8;
const origObj = {color: 'blue'};

const changeItUp = (num, obj) => {
  num = 7;
  obj.color = 'red';
};

changeItUp(origNum, origObj);

// Will output 8 since integers are passed by value.
console.log(origNum);

// Will outout 'red' since objects are passed
// by reference and are therefore mutable.
console.log(origObj.color);

const engine = {
  // method shortland, with one argument
  start(adverb) {
    console.log(`The engine starts up $(adverb...`));
  },
  // anonymous arrow function expression with no arguments
  sputter: () => {
    console.log('The engine sputters...');
  },
};

engine.start('noisily');
engine.sputter();

/* Console output:
The engine starts up noisily...
The engine sputters...
*/