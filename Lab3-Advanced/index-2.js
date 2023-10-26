/*The following delayMsg function is intended to be used to delay printing a message until some time has passed.
a) What order will the four tests below print in? Why?
b) Rewrite delayMsg as an arrow function
c) Add a fifth test which uses a large delay time (greater than 10 seconds)
d) Use clearTimeout to prevent the fifth test from printing at all.*/

function delayMsg(msg)
{
console.log(`This message will be printed after a delay: ${msg}`)
}
setTimeout(delayMsg, 100, '#1: Delayed by 100ms');
setTimeout(delayMsg, 20, '#2: Delayed by 20ms');
setTimeout(delayMsg, 0, '#3: Delayed by 0ms');
delayMsg('#4: Not delayed at all')

//(a) #4, 3, 2, 1. Because delayMsg is synchromous function and it is excuted first. setTimeout is an asynchronous function and it is excuted in the order of the time in the delay.

//(b)
const delayMsgArrow = msg => console.log(`This message will be printed after a delay: ${msg}`)

//(c)
/*setTimeout(() => console.log(`This message will be printed after a delay: #5: Delayed by 10000ms`), 10000);*/
const cancelTimer =setTimeout(delayMsg, 10 *1000, '#5: Delayed by 10000ms');

//(d)
 clearTimeout(cancelTimer);

