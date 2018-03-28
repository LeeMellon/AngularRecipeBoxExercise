import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent  {
  @Input() childRecipeList: Recipe[];
  @Output() viewClickSender = new EventEmitter();
  @Output() editClickSender = new EventEmitter();
  filterByVegitarian: string = "allRecipes";

  viewClicked(clickedRecipe: Recipe){
    this.viewClickSender.emit(clickedRecipe);
  }

  editClicked(clickedRecipe: Recipe){
    this.editClickSender.emit(clickedRecipe);
  }

  onChange(optionFromMenu){
    this.filterByVegitarian = optionFromMenu;
  }

  toggleVegitarian(clickedRecipe: Recipe, setVegitarian: boolean){
    clickedRecipe.vegitarian = setVegitarian;
  }

  constructor() { }

}
