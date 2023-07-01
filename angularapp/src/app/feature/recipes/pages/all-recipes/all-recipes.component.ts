import { Component } from '@angular/core';
import { Recipe } from 'src/app/core/models/Recipe';
import { RecipeService } from '../../services/RecipeService';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
  providers: [RecipeService],
})

export class AllRecipesComponent {
  title = 'fetchRecipes';
  recipes: Recipe[] = [];
  constructor(private _fetchRecipesService: RecipeService) {}

  ngOnInit() {
    this._fetchRecipesService.fetchData().subscribe((response: any) => {
      this.recipes = response;
      console.log(this.recipes);
    });
  }
}
