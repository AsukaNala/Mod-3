/*Use the following variables to understand how JavaScript stores objects by reference.
a) Create a new moreSports variable equal to teamSports and add some new sport
values to it (using push and unshift)
b) Create a new dog2 variable equal to dog1 and give it a new value
c) Create a new cat2 variable equal to cat1 and change its name property
d) Print the original teamSports, dog1 and cat1 variables to the console. Have they
changed? Why?
e) Change the way the moreSports and cat2 variables are created to ensure the
originals remain independent*/

let teamSports = ['Hockey', 'Cricket', 'Volleyball'];
let dog1 = 'Bingo';
let cat1 = { name: 'Fluffy', breed: 'Siberian' };

//let moreSports = teamSports;//(a)
let moreSports = [...teamSports]; //(e)   shallow
console.log(moreSports);
moreSports.push('Baseball');
moreSports.unshift('Soccer');
console.log(moreSports);
console.log(teamSports); //(d) Changed. Array is object and stored in the same location in the memory.//(e)not changed.


let dog2 = dog1; //(b)
dog2 = 'Lucky';
console.log(dog2);
console.log(dog1); //(d) Not Changed. dog2 is just copied and is independent variable. does not affect dog1.

let cat2 = cat1; //(c)
//let cat2 = {...cat1} //(e) shallow  .   
//let cat2 = Object.assign({},cat1); // also shallow.
cat2.name = 'Nala';
console.log(cat1); /*(d) Changed. cat1 and cat2 are object. they are stored in 
the same location in memory.*/ //(e)not changed
console.log(cat2);