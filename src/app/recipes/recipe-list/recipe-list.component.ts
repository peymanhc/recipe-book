import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Peymanhc',
      'lorem ipsum dolor sit amet, consectetur adip',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LDgQPhGxwDZ8jJ9bbRH-SUUmPYS8RXqssm8v5vKtQi8DrR6bhihftoIl4ZQsKQZ4XKE&usqp=CAU'
    ),
    new Recipe(
      'MaryamZaki',
      'A description of the recipe',
      'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
