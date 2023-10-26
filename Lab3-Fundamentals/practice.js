/*function formula(a,b) {
  let result = a - b + 10;
  return result;
}

console.log(formula(5,3)); */

let person = {
  name: 'Ed',
  age: 32,
  hobby: 'singing',
  favSong:'"Perfect"',
  intro: function() {
    console.log(`${this.name} likes ${this.hobby} ${this.favSong}.`);
  }
}

console.log(person);
person.intro();

let number = 1;
console.log(number +=1);