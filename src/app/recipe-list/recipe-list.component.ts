import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  viewRecipeClicked(clickedRecipe: Recipe){
    this.clickSender.emit(clickedRecipe)
  }


  constructor() { }

  ngOnInit() {
  }

}
