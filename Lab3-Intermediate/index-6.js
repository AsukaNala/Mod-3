/*Create a function unique(duplicatesArray) which takes an array parameter that may
include duplicates. Your function should return an array containing only the unique values
from duplicatesArray.
Test with the following arrays and create another one of your own.*/

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const vegitables = ['cabbages', 'onions', 'mashrooms', 'carrots', 'onions', 'capsicums', 'carrots', 'eggplants']


function unique(duplicatesArray) {
   return Array.from(new Set(duplicatesArray));
} //new Set() can only have values.

/*function unique(duplicatesArray) {
   const uniqueArray =[];
   duplicatesArray.forEach(item =>{
      if(!uniqueArray.includes(item)){
         uniqueArray.push(item);
      }
   })
   return uniqueArray;
}*/

/*function unique(duplicatesArray) {
   const uniqueArray =[];
   for(item of duplicatesArray ){
      if(!uniqueArray.includes(item)){
         uniqueArray.push(item);
      }
   }
   return uniqueArray;
}*/





console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(vegitables))