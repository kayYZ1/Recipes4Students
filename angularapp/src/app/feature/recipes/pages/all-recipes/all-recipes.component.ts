import { Component } from '@angular/core';
import { Recipe } from 'src/app/core/models/Recipe';
import { AllRecipeService } from '../../services/AllRecipeService';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
  providers: [AllRecipeService],
})
export class AllRecipesComponent {
  title = 'fetchRecipes';
  recipes: Recipe[] = [];
  constructor(private _fetchRecipesService: AllRecipeService) {}

  ngOnInit() {
    this._fetchRecipesService.fetchData().subscribe((response: any) => {
      this.recipes = response;
      console.log(this.recipes);
    });
  }
}
