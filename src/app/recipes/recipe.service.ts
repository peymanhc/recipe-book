import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Peymanhc',
      'lorem ipsum dolor sit amet, consectetur adip',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LDgQPhGxwDZ8jJ9bbRH-SUUmPYS8RXqssm8v5vKtQi8DrR6bhihftoIl4ZQsKQZ4XKE&usqp=CAU',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 10)]
    ),
    new Recipe(
      'MaryamZaki',
      'A description of the recipe',
      'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg',
      [new Ingredient('Test', 11), new Ingredient('Meat', 10)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}
  getRecipe() {
    return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
