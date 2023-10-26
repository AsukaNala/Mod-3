/*The Fibonacci sequence of numbers is a famous pattern where the next number in the
sequence is the sum of the previous 2.
e.g. 1, 1, 2, 3, 5, 8, 13, 21, 34, etc.

a) Write a function printFibonacci() using setInterval that outputs a number in
the Fibonacci sequence every second.

b) Write a new version printFibonacciTimeouts() that uses nested setTimeout
calls to do the same thing

c) Extend one of the above functions to accept a limit argument, which tells it how many
numbers to print before stopping.*/

//(a)
function printFibonacci(){
  let a = 0;
  let b = 1;
  console.log(a); //print first fibo num
  console.log(b);
  const intervalId = setInterval(() => {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }, 1000)
}

//printFibonacci();
//(b) ?
function printFibonacciTimeouts() {
  let a = 0;
  let b = 1;
  let count = 0;

  function printNext() {
      console.log(a);
      const next = a + b;
      a = b;
      b = next;
      count++;
      setTimeout(printNext, 1000); 
    }
    printNext();
  }

//printFibonacciTimeouts(); 

//(c) ?
function printFibonacciLimitTime(limit){
  let a = 0;
  let b = 1;
  console.log(a); //print first fibo num
  console.log(b);
  const intervalId = setInterval(() => {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
  }, 1000)
  setTimeout(() => clearInterval(intervalId), limit *1000)
}

//printFibonacciLimitTime(10);

function printFibonacciLimit(limit){
  let a = 0;
  let b = 1;
  console.log(a); 
  console.log(b);
  let count = 2;

  const intervalFunc = setInterval(() =>{
    let nextNum = a + b;
    console.log(a + b);
    a = b;
    b = nextNum;
    count++;
    if (count === limit) clearInterval(intervalFunc);
    
  }, 1000)
}

printFibonacciLimit(5)






