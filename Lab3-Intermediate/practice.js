

const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// traditional style of for loop - works because Sets are iterable
for (let name of names) {
console.log(name)
}
// more concise for simple operations, newer syntax using arrow function
names.forEach(name => console.log(name))

let today = new Date();
console.log(today.toLocaleString());