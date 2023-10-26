/*Use the following animals array for the below tasks. Test each one by printing the result to
the console. Review the following link for tips:

https://developer.mozilla.org/en-
US/docs/Web/JavaScript/Reference/Global_Objects/Array

a) Add 2 new values to the end
b) Add 2 new values to the beginning
c) Sort the values alphabetically
d) Write a function replaceMiddleAnimal(newValue) that replaces the value in the
middle of the animals array with newValue
e) Write a function findMatchingAnimals(beginsWith) that returns a new array
containing all the animals that begin with the beginsWith string. Try to make it work
regardless of upper/lower case.*/

const animals = ['Tiger', 'Giraffe']
console.log(animals)

animals.push('Koalas','Kangaloos');
console.log(animals); //(a)

animals.unshift('Lions','Penguins');
console.log(animals);//(b)

animals.sort();
console.log(animals);//(c)


/*function replaceMiddleAnimal(newValue) {
  return animals.splice(2,2, newValue);
}
replaceMiddleAnimal('Elephants');
console.log(animals);//(d)*/

function replaceMiddleAnimal(newValue) {
  let halfAnimals = animals.length / 2;
  animals[halfAnimals] = newValue;
}
replaceMiddleAnimal('Elephants');
console.log(animals);//(d)*/



/*function findMatchingAnimals(beginsWith) {
  let filtered = animals.filter(animal =>animal.charAt(0).toLowerCase() === beginsWith.toLowerCase())
  return filtered;
}  // (e)*/

/*function findMatchingAnimals(beginsWith) {
  return animals.filter((animal) => animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
}*/

function findMatchingAnimals(beginsWith){
  let filtered = [];
  for(let i = 0; i < animals.length; i ++) {
    let animal = animals[i].toLowerCase();
    let value = beginsWith.toLowerCase();
    if(animal.startsWith(value)){
      filtered.push(animals[i]);
    }

  }
    return filtered;
}



console.log(findMatchingAnimals('T'))








  

