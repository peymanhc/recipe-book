import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
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
  getRecipe() {
    return this.recipes.slice();
  }
}
