import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService, ShoppingListService],
})
export class RecipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
