//Step 1
function makeBase(){
 console.log('1: Make the pizza base.')
};

//Step 2
const addSauce = function(){
 console.log('2: Add tomato sauce to the pizza.');
};

//Step 3
const addCheese = () => console.log('3: Add cheese to the pizza.');

//Step 4
function addTopping(){
  console.log('4: Add the topping to the pizza.')
};

//Step 5
const bakePizza = ()=> console.log('5: Bake the pizza.'); 

//Step 6
const slicePizza = function(){
 console.log('6: Slice the pizza. ')
};

//function to call functions for all steps
// function makePizza(){
// makeBase();
// addSauce();
// addCheese();
// addTopping();
// bakePizza();
// slicePizza();
// }


// //Task2

setTimeout(makeBase, 1000);
setTimeout(addSauce, 2000);
setTimeout(addCheese, 3000);
setTimeout(addTopping, 4000);
setTimeout(bakePizza, 5000);
setTimeout(slicePizza, 6000);

// //Task3

new Promise((resolve,reject) => {
  setTimeout(makeBase, 1000);
}).then(() => setTimeout(addSauce, 2000))  
  .then(() => setTimeout(addCheese, 3000))
  .then(() => setTimeout(addTopping, 4000))
  .then(() => setTimeout(bakePizza, 5000)) 
  .then(() => setTimeout(slicePizza, 6000));

  //Task 4
  
   async function makePizza() {
    await makeBase();
    await addSauce();
    await addCheese();
    await addTopping();
    await bakePizza();
    await slicePizza();
  }
  
  makePizza();