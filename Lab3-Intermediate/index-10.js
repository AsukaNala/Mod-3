/*The following code uses the Date object to print the current time and the number of hours
that have passed today so far. Extend the code to do the following:*/
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

/*
a) Print the total number of minutes that have passed so far today
b) Print the total number of seconds that have passed so far today
c) Calculate and print your age as: 'I am x years, y months and z days old'
d) Write a function daysInBetween(date1, date2) which calculates and returns the amount
of days in between the two given dates.*/

console.log(today.getHours()* 60  + today.getMinutes());  //(a)
console.log(today.getHours()* 60* 60 + today.getMinutes()*60 + today.getSeconds());  //(b)


/*function myAge(birthYear,birthMonth,birthDay) {
  let x = today.getFullYear() - birthYear;
  let y = today.getMonth()+1 - birthMonth;
  let z = today.getDate() - birthDay;
  console.log(`I am ${x} years, ${y} months and ${z} days old`);
}*/
//console.log(1984,5,11);

function myAge(DateofBirth){
  const birthday = new Date(DateofBirth)
  let years = today.getFullYear() - birthday.getFullYear();
  let months = today.getMonth() - birthday.getMonth();
  let days = today.getDate() - birthday.getDate();
  console.log(`I am ${years} years, ${months} months and ${days} days old`);
}
myAge('1984-05-11');//(c) //look at moment.js etc


const birthday = new Date('1984-05-11');

function daysInBetween(date1, date2) {
 let differenceMS = date2 - date1;
 let millisecondsPerDay = 24 * 60 * 60 * 1000;
 let differenceDays = Math.floor(differenceMS / millisecondsPerDay);
 return Math.abs(differenceDays);
}

console.log(daysInBetween(birthday,today));

