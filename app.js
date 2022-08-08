let num1 = 10;
let num2 = 20;
let num3 = "10";
let word1 = "Hello";
let word2 = "hello";

// //LOGICAL OPERATORS
console.log(num1 < num2); //less than
console.log(num1 > num2); //greater than
console.log(num1 <= num2); //less than or equal to
console.log(num1 >= num2); //greater than or equal to
console.log(!true); //not true
console.log(!false); //not false.  ! means not
console.log(num1 == num3);
console.log(num1 === num3); // equality check
console.log(word1 === word2);
console.log(word1 != word2); //not equal to

// CONTROL FLOW
let item = "U2";

if (item === "Annapurna") {
  console.log("Buy Annapurna");
} else if (item === "U2") {
  console.log("Buy U2");
}else if (item === "A1") {
    console.log("Buy A1");
} else if (item === "Rocky Bread") {
    console.log("Buy Rocky Bread");
}

// // GRADING SYSTEM
let score = 100;
if (score >= 0 && score <= 100) {
    if (score >= 90)
    console.log("Excellent")
} else if (score >= 80) {
    console.log("Very Good");
} else if (score >= 70) {
    console.log("Good");
} else if (score >= 60) {
    console.log("Average");
}else if (score >= 50) {
    console.log("Credit");
} else if (score >= 40) {
    console.log("Pass");
} else if (score >= 0) {
    console.log("Fail");
} else {
    console.log(score >= 70); 
}

// FUNCTION
function sum(a, b) {
    let total = a + b;
    return total;
}

let thisMath = sum(3, 9);
console.log(thisMath);

let eleven = sum(5, 6);
let fifteen = (7, 8);
let nineteen = (9, 10);

function multiply(a, b) {
    let total = a * b;
    return total;
}

let four = multiply(2, 2);
let eight = multiply(1, 8); 
let nine = multiply(3, 3)

let g = multiply(4, 5);
console.log(g);

// LOOPS

for (let i = 1; i <= 10; i++) {
    console.log(i + "' I will not talk in class again");
}

// WHILE LOOPS
let num = 1;
while (num <= 10) {
    console.log(num);

num = num + 1;
}

// DO... WHILE LOOP
let age = 1;
do {
    console.log(age + ". You cant vote");
    age++;
} while (age < 18);

// ARRAY METHODS
let ages = [19, 26, 24, 18, 22, 35, 30, 33, 31, 29];
// for (let age of ages) {
//   console.log(Math.pow(age, 2));
// }

// let marriage = ages.filter(function (mark) {
//   return mark > 25;
// });
let marriage =ages.filter((mark) => mark > 25);
console.log(marriage);

// MAP
let squares = ages.map((age) => age * age);
console.log(squares);

// FIND
let eighteen = ages.find((age) => age == 18);
console.log(eighteen);

