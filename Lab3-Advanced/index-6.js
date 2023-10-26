/*Use the Function prototype to add a new delay(ms) function to all functions, which can
be used to delay the call to that function by ms milliseconds.*/

/*
a) Use the example multiply function below to test it with, as above, and assume that all
delayed functions will take two parameters

b) Use apply to improve your solution so that delayed functions can take any number of
parameters

c) Modify multiply to take 4 parameters and multiply all of them, and test that your
delay prototype function still works.*/
//?
function multiply(a, b) {
  console.log( a * b );
  }
  
//(a)
Function.prototype.delay = function(ms){
  let originalFunction = this;
  return function(arg1,arg2){
    setTimeout(()=>{originalFunction(arg1, arg2)}, ms);
  }
}
multiply.delay(500)(5, 5); // prints 25 after 500 milliseconds

//(b)
Function.prototype.delayB = function(ms){
  let originalFunction = this;
  return function(...args){
    setTimeout(()=>{
      originalFunction.apply(this,args);
    }, ms);
  }
}


//(c)
function multiply4(a, b, c, d){
  console.log( a * b * c *d);
}

multiply4.delayB(500)(1, 2, 3 ,4); // prints 6480 after 5
