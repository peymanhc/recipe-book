import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A title',
      'A description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LDgQPhGxwDZ8jJ9bbRH-SUUmPYS8RXqssm8v5vKtQi8DrR6bhihftoIl4ZQsKQZ4XKE&usqp=CAU'
    ),
    new Recipe(
      'A title',
      'A description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_LDgQPhGxwDZ8jJ9bbRH-SUUmPYS8RXqssm8v5vKtQi8DrR6bhihftoIl4ZQsKQZ4XKE&usqp=CAU'
    ),
  ];
  constructor() {}
  ngOnInit(): void {}
}
