import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Pipe({
  name: "meat",
  pure: false
})

export class MeatPipe implements PipeTransform{
  transform(input: Recipe[], args){
    let outputArray: Recipe[] = [];
    for(let i = 0; i< input.length; i ++){
      if(input[i].vegitarian === false){
        outputArray.push(input[i])
      }
    }
    return outputArray;
  }
}
