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
    new Recipe("Air Biscuits","Air, flour","mix ingredients until a magic buscuit", 1),
    new Recipe("Shoe Soup","Shoes lightly aged, laces: deboned, water","add water to shoe. Heat untill flavourful" , 2),
    new Recipe("Turkey","Two Turkies","make turkies feel safe. Leave the rest to nature", 3),
    new Recipe("Table","lesg, screws, wood","Is this food?" , 4),
    new Recipe("Whoop-Ass","One ass: unwhooped, can","whoop that ass with can untill desired effect achieved", 5),
  ];
  selectedRecipe: Recipe


  viewRecipeClicked(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  clear(){
    this.selectedRecipe = null;
  }
}
