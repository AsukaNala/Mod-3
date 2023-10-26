let salaries = {
"Timothy" : 35000,
"David" : 25000,
"Mary" : 55000,
"Christina" : 75000,
"James" : 43000
};


/*
a) Write a function sumSalaries(salaries) that calculates and returns the total of all salaries
b) Write a function topEarner(salaries) that calculates and returns the name of the person
earning the highest salary*/


/*const sumSalaries = salaries =>{
  let sum =0;
  for(let name in salaries){
    sum += salaries[name];//name is a variable here so need to use []
  }
  return sum;
}
let total = sumSalaries(salaries);
console.log(total);*/ //(a)

function sumSalaries(salaries){
  let sum = 0;
  for(let [name, salary] of Object.entries(salaries)){
     sum += salaries[name];
  }
   return sum;
}//destrucured object(Object.entries) in for..of.Object is not iterable so make it iterable.(for...of)
let total = sumSalaries(salaries);
console.log(total);

function topEarner(salaries) {
  let highestSalary = 0; //set baseline
  let topEarner = '';
  for(let name in salaries){
    if(salaries[name] > highestSalary){
      highestSalary = salaries[name];
      topEarner = name;//when it gets to the criteria loof stops
    }
  }
  return topEarner;//and return the result
}

console.log(topEarner(salaries));




