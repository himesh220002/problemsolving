/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer){
  
  if(timer === 0){return 'Lasagna is done.'}
  else if(timer>0){return 'Not done, please wait.'}
  else if(timer === undefined){
    return 'You forgot to set the timer.'
  }else{
    return;
  }
}
export function preparationTime(layers,averagePreparationTime){
  if(averagePreparationTime === undefined || averagePreparationTime === null){
    return layers.length*2;
  }
 return (layers.length*(averagePreparationTime));
}

export function quantities(layers){
  let noodlesCount = 0;
  let sauceCount = 0;
  for(let i=0; i<layers.length; i++){
    if(layers[i]=== 'noodles'){
      noodlesCount += 1;
    }
    if(layers[i] === 'sauce'){
      sauceCount += 1;
    }
  } 
  let a = noodlesCount*50;
  let b = sauceCount*0.2;
  return {
    noodles: a,
    sauce: b
  };
  
}
export function addSecretIngredient(friendsList, myList){
  const secretIngredient = friendsList[friendsList.length-1]; 
   myList.push(secretIngredient);
}
export function scaleRecipe(recipe, portions) {
  let factor = portions /2;
  const scaledRecipe ={};
  for(let ingredient in recipe){
    scaledRecipe[ingredient] = recipe[ingredient]* factor;
  }
  return scaledRecipe;
}