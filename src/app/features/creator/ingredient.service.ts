import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

const INGREDIENTS_RESOURCE = '/ingredients';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(private http: HttpClient) {}

  ingredients$ = this.http.get<Ingredient[]>(`${environment.API}${INGREDIENTS_RESOURCE}`);

}
