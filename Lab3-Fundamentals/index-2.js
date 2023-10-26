let three = "3";
let four = "4";
let thirty = "30";

// if the quatations are removed, strings become numbers and we will get the right result.
//what is the value of the following expressions?
let addition = three + four; // 34 because + operator concatinates strings.
let multiplication = three * four; // 12
let division = three / four; // 0.75
let subtraction = three - four; // -1

console.log(addition);
console.log(multiplication);
console.log(division);
console.log(subtraction);



let lessThan1 = three < four; // true
let lessThan2 = thirty < four; // false wrong => true strings are compared letter-by-letter

console.log(lessThan1);
console.log(lessThan2);