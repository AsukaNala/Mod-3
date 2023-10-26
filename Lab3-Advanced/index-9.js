/*We can delay execution of a function using setTimeout, where we need to provide both the callback function and the delay after which it should execute.

a) Create a promise-based alternative randomDelay() that delays execution for a
random amount of time (between 1 and 20 seconds) and returns a promise we can use
via .then(), as in the starter code below

b) If the random delay is even, consider this a successful delay and resolve the promise,
and if the random number is odd, consider this a failure and reject it

c) Update the testing code to catch rejected promises and print a different message

d) Try to update the then and catch messages to include the random delay value*/

function randomDelay() {
  let delay = Math.ceil(Math.random() * 20); //(a)
  return new Promise(resolve => setTimeout(resolve, delay * 1000))
  
  }
  randomDelay().then(() => console.log('There appears to have been a delay.'));

  //(b)
  function randomDelayNumber(){ 
    let delay = Math.ceil(Math.random() * 20);
    return new Promise((resolve,reject) =>{
      setTimeout((delay % 2 ===0) ? resolve: reject, delay * 1000);
    })
  }

  //(c)
  randomDelayNumber()
  .then(() => console.log('There appears to have been a delay.'))
  .catch(()=> console.log('Fail.'))

  //(d)
  function randomDelayNumberB(){ 
    let delay = Math.ceil(Math.random() * 20);
    return new Promise((resolve,reject) =>{
      setTimeout((delay % 2 ===0) ? resolve: reject, delay * 1000, delay);
    })
  }

  randomDelayNumberB()
  .then((delay)=> console.log(`Success! Delayed ${delay} seconds`))
  .catch((delay)=> console.log(`Fail! Delayed ${delay} seconds`));


