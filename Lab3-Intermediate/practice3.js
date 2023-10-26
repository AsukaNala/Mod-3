/*for (let x = 1; x < 10; x++){
  let row = '';
  for (let y = 1; y < 10; y++){
    row += `${x * y}  `;
  }
  console.log(row);
}*/


 /*let a = 'Fizz';
 let b = 'Buzz';
 let c = 'FizzBuzz';
for (let x = 1; x <= 100; x++){
  if (x % 15 === 0){
    console.log(c);
  } else if (x % 5 === 0){
    console.log(b);
  } else if (x % 3 === 0){
    console.log(a);
  } else
  console.log(x);
}*/

/*const ageType = (age) =>{
  if (3 > age) {
    return 'baby';
  } else if (18 > age){
    return 'kid';
  } else if (65 > age) {
    return 'adult';
  } else if (65 <= age) {
    return 'elderly';
  }
}
console.log(ageType(6));*/

/*const number =(x) => {
  if(x % 15 ===0){
    return 'FizzBuzz';
  }else if(x % 5 === 0){
    return 'Buzz';
  }else if(x % 3 === 0){
    return 'Fizz';
  }else {
    return x;
  }
}

for(let i =1; i < 100; i++ ){
    console.log(number(i));
}
*/

/*const downtown = {
  name:'downtown',
  boke: 'Matsumoto',
  tsukkomi: 'Hamada',
  introduce() {
    console.log(`Konbi is ${this.name}. Boke is ${this.boke} and Tsukkomi is ${this.tsukkomi}.`)
  }
}

downtown.introduce();*/

/*const kuku =[];

for(let i = 0; i < 9; i++){
  kuku.push([]);
  for(let j = 0; j < 9; j++) {
    kuku[i].push((i+1)*(j+1));
  }
}
console.table(kuku);*/

const array = [5, 7, 2, 4];

/*let included = false;

for(let i =0; i < array.length; i++){
  if(array[i] === value){
    included = true;
    break;
  }
}
   if(included){
    console.log('yes');
   }else {
    console.log('no');
   }*/

   /*const MAX_NUM = 1000;
   const END = MAX_NUM + 1;

   for(let i = 2; i < END; i++){

    for(let j = 2; j<=i; j++){
      if(j ===i){
        console.log(i);
      }

      if(i % j ===0){
        break;
      }
    }
   }*/

   const arr = [1,5,7,2,1,3,4,5,7,8,1,3,5,2];

   const sort = ([...arr].sort((a,b) => a-b));
   console.log(sort);
   console.log(arr);


