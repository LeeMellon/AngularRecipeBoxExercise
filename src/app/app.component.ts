import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe Box';
  masterRecipieList: Recipe[] = [
    new Recipe("Air Biscuits","Air, flour","mix ingredients until a magic buscuit", true, 1),
    new Recipe("Shoe Soup","Shoes lightly aged, laces: deboned, water","add water to shoe. Heat untill flavourful",false, 2),
    new Recipe("Turkey","Two Turkies","make turkies feel safe. Leave the rest to nature", false, 3),
    new Recipe("Table","lesg, screws, wood","Is this food?", true, 4),
    new Recipe("Whoop-Ass","One ass: unwhooped, can","whoop that ass with can untill desired effect achieved", false, 5),
  ];
  selectedEditRecipe: Recipe
  selectedViewRecipe: Recipe


  editRecipeClicked(clickedEditRecipe){
    this.selectedEditRecipe = clickedEditRecipe;
  }

  finishEditing(){
    this.selectedEditRecipe = null;
  }

  viewRecipeClicked(clickedViewRecipe) {
    this.selectedViewRecipe = clickedViewRecipe;
  }

  finishViewing(){
    this.selectedViewRecipe = null;
  }

  newRecipe(newRecipe) {
    this.masterRecipieList.push(newRecipe);
  }
}
