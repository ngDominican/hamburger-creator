import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IngredientService } from '../ingredient.service';
import { Observable } from 'rxjs';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-ingredients-viewer',
  templateUrl: './ingredients-viewer.component.html',
  styles: []
})
export class IngredientsViewerComponent implements OnInit {

  ingredients$: Observable<Ingredient[]>;
  @Output() onSelectedIngredient: EventEmitter<Ingredient> = new EventEmitter(null);

  constructor(
    private ingredientService: IngredientService
  ) {}

  ngOnInit() {
    this.ingredients$ = this.ingredientService.ingredients$;
  }

  onSelectIngredient(ingredient: Ingredient) {
    this.onSelectedIngredient.emit(ingredient);
  }

}
