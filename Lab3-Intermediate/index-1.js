/*Create a function that takes a string as a parameter and returns the string with the first
character of each word changed into a capital letter, as in the example below. Test it with
different strings.*/


//const sentence = 'los angeles';
//console.log(sentence.split(' '))

function ucFirstLetters(str){
  let splStr = str.split(' ');
  let words = splStr.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(' ');

}



console.log(ucFirstLetters('los angels'));
console.log(ucFirstLetters('bibra lake'));
