import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-view-recipe',
  templateUrl: './view-recipe.component.html',
  styleUrls: ['./view-recipe.component.css']
})
export class ViewRecipeComponent {
  @Input() childViewRecipe: Recipe;
  @Output() clickedDoneView = new EventEmitter();

  finishViewing() {
    this.clickedDoneView.emit();
  }

  constructor() { }


}
