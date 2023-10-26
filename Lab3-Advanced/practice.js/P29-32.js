const user = {
  name: 'John',
  sayHi() {
  console.log(`Hi, ${this.name}`)
  }
  }
  user.sayHi() // called directly, works! Hi, John
  //setTimeout(user.sayHi, 1000) // passed as reference, fails! Hi, undefined

const userA = {
  name: 'John',
  sayHi() {
   console.log(`Hi, ${this.name}`)
    }
}
    
setTimeout( function() { userA.sayHi(); }, 1000 ) // works! Hi, John
setTimeout( () => userA.sayHi(), 1000 ) // same as above, arrow function (more common)

const userB = {
  name: 'John',
  sayHi() {
  console.log(`Hi, ${this.name}`)
  }
  }
const boundSayHi = userB.sayHi.bind(userB) // new function reference with user context explicitly bound
setTimeout( boundSayHi, 1000 ) // works! Hi, John

function multiply(a, b) {
  return a * b;
  }
const triple = multiply.bind(null, 3); //context is not needed, binds 3 as first argument a
console.log( triple(5) ) // a is 3 (from bind), b is 5 (from function call), result is 15
