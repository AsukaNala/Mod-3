/*The following code creates a new Map object for storing names beginning with A, B, or C
with their phone numbers.*/

const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')
/*
a) Create a new phoneBookDEF Map to store names beginning with D, E or F
b) Initialise the contents of phoneBookDEF by passing in an array of keys/values
c) Update the phone number for Caroline
d) Write a function printPhoneBook(contacts) that prints the names and phone
numbers in the given Map
e) Combine the contents of the two individual Maps into a single phoneBook Map
f) Print out the full list of names in the combined phone book*/

const phoneBookDEF = new Map([
  ['Dani', '0413234569'],
  ['Ethan', '0412569874'],
  ['Frank', '0423456789']
]);//(a)(b)

phoneBookABC.set('Caroline', '0498745632')//(c)

//console.log(phoneBookABC);
//console.log(phoneBookDEF);

function printPhoneBook(contacts) {
  for (let item of contacts){
    console.log(item)
  }
}//(d)
printPhoneBook(phoneBookABC);

//const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);//(e)

const phoneBook = new Map([...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]));
console.log([...phoneBook.keys()]) //as Array //(f)
console.log(Array.from(phoneBook.keys()));
//console.log(phoneBook.keys());// as [Map Iterator]
//console.log(phoneBook);
//printPhoneBook(phoneBook);















