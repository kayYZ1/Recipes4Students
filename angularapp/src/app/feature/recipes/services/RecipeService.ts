import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"
import { Recipe } from "src/app/core/models/Recipe";

@Injectable({
  providedIn: "root"
})

export class RecipeService {
  constructor(private _http: HttpClient) {}

  fetchData() {
    return this._http.get("http://localhost:5200/api/Recipes")
  }

  addRecipe(values: Recipe) {
    return this._http.post("http://localhost:5200/api/Recipes", values)
  }
}