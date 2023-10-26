const recipeMap = new Map([
  ['flour', '1 cup'],
  ['milk', '1/2 cup'],
  ['eggs', 2],
  ['butter', '50g']
  ])
  //for (let ingredient of recipeMap.keys()) {
  console.log([...recipeMap.keys()])  // flour, milk, eggs, butter
  
  for (let quantity of recipeMap.values()) {
  console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
  }
  for (let item of recipeMap) { // same as recipeMap.entries()
  console.log(item) // ['flour', '1 cup'], (and so on)
  }