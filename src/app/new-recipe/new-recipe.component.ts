import { Component,Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent {
@Output() createdSender = new EventEmitter();

create(title: string, ingredients: string, procedure: string, vegitarian: boolean, id: string){
  let newRecipe = new Recipe(title, ingredients, procedure, vegitarian, parseInt(id))
  this.createdSender.emit(newRecipe);
}

  constructor() { }



}
