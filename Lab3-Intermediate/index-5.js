/*Decimal number operations in JavaScript can lead to unexpected results, as in the
following:*/
let twentyCents = 0.20;
let tenCents = 0.10;
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`);

/*We can sometimes avoid this using the toFixed function to force the number of decimal
places as below, but it’s not always useful:*/
let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen);


/*a) Explain why the above code returns the wrong answer   // (A)toFixed() returns strings.
b) Create a function currencyAddition(float1, float2) which safely adds the two
decimal numbers float1 and float2 and returns the correct float result.
c) Create a function currencyOperation(float1, float2, operation) which
safely performs the given operation (either +, -, / or *) on the two numbers and returns

the correct float result. https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Statements/switch may be useful.

d) (Extension) Extend the above function to include a fourth argument numDecimals
which allows the operation to support different amounts of decimal places from 1 to 10.*/

/*HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. Test with
different values as well as the below:*/



function currencyAddition(float1, float2) {
  return (float1* 10 + float2* 10)/10;
} //(b)


/*function currencyOperation(float1, float2, operation) {
  let number1 = float1 * 100;
  let number2 = float2 * 100;
  let result = 0;

  switch(operation){
    case '+':
     result = number1 + number2;
     break;
    case '-':
     result = number1 - number2;
     break; 
    case '/':
     result = number1 / number2;
     break;
    case '*':
     result = number1 * number2;
  }

  return result / 100;
} //(c) */

function currencyAddition2(float1, float2, operation, numDecimals){
   let fixedNumber1 = parseFloat(float1.toFixed(numDecimals));
   let fixedNumber2 = parseFloat(float2.toFixed(numDecimals));
   let result = 0;

   switch(operation){
    case '+':
     result = fixedNumber1+ fixedNumber2;
     break;
    case '-':
     result = fixedNumber1 - fixedNumber2;
     break; 
    case '/':
     result = fixedNumber1 / fixedNumber2;
     break;
    case '*':
     result = fixedNumber1 * fixedNumber2;
   }

   return parseFloat(result.toFixed(numDecimals));
}

console.log(0.3 == currencyAddition(0.1, 0.2)) // true
//console.log(0.06 == currencyOperation(0.3, 0.2, '*')) // true
console.log(2 == currencyAddition2(0.6, 0.3,'/',3)) // true

  



