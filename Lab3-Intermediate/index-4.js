/*
a)Write a function camelCase(cssProp) that changes dash-separated CSS properties like
'margin-left' into camel-cased 'marginLeft'.
The function should remove all dashes, and uppercase the first letter of each word after a
dash.
b) Create variants of the camelCase function that use different types of for loops, and
c) with and without the conditional operator.*/


/*const camelCase = cssProp => {
  let words = cssProp.split('-');
  let camelCaseWords = words.map((word,index) => {
    if(index === 0){
      return word;
    }else {
     return word.charAt(0).toUpperCase() + word.slice(1);
    }
  })
  return camelCaseWords.join('');

} //(a)*/

/*function camelCase(cssProp) {
  let words = cssProp.split('-');
  let camelString ='';
  words.forEach(word =>{
    if(camelString.length == 0){
      camelString = word;
    } else {
      camelString += word.charAt(0).toUpperCase() + word.substring(1);
    }
  })
  return camelString;
}
*/
const camelCase2 = cssProp => {
  let camelString =''
  for(let word of cssProp.split('-')){
    camelString += 
    camelString.length == 0
    ? word
    : word.charAt(0).toUpperCase() + word.substring(1);

  }
  return camelString;
}








console.log(camelCase2('margin-left')) // marginLeft
console.log(camelCase2('background-image')) // backgroundImage
console.log(camelCase2('display')) // display
