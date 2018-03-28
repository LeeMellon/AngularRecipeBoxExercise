import{ Pipe, PipeTransform } from '@angular/core';
import{ Recipe } from './models/recipe.model';


@Pipe({
  name:"vegitarian",
  pure: false

})
export class VegitarianPipe implements PipeTransform{
  transform(input: Recipe[], mealType){
    let outputArray: Recipe[]= [];
    if(mealType === 'vegitarianRecipes'){
      for(let i=0; i < input.length ; i ++){
        if(input[i].vegitarian === true){
          outputArray.push(input[i]);
        }
      }
      return outputArray;
    }else if( mealType === 'meatRecipes'){
    for(let i=0; i < input.length ; i ++){
      if(input[i].vegitarian === false){
        outputArray.push(input[i]);
      }
    }
    return outputArray;
  } else{
    return input;
  }
  }
}
