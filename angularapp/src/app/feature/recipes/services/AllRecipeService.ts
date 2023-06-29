import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core"

@Injectable({
  providedIn: "root"
})

export class AllRecipeService {
  constructor(private _http: HttpClient) {}

  fetchData() {
    return this._http.get("http://localhost:5200/api/Recipes")
  }
}