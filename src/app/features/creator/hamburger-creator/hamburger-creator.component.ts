import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HamburgerService } from '../hamburger.service';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hamburger-creator',
  templateUrl: './hamburger-creator.component.html',
  styles: []
})
export class HamburgerCreatorComponent implements OnInit {

  isCreated: boolean;
  form: FormGroup;

  constructor(
    private hamburgerService: HamburgerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      ingredients: [[], Validators.required]
    });
  }

  get burger() {
    return this.form.value;
  }

  onSelectIngredient(ingredient: Ingredient) {
    const { ingredients } = this.form.controls;
    ingredient.order = ingredients.value.length + 1;
    ingredients.setValue([...ingredients.value, ingredient]);
  }

  onRemoveIngredient(index: number) {
    const { ingredients } = this.form.controls;
    const newArr = ingredients.value
      .slice(0, index)
      .concat(ingredients.value.slice(index + 1, ingredients.value.length));
    ingredients.setValue([...newArr]);
  }

  onSave() {
    this.hamburgerService.save(this.form.value)
      .pipe(
        tap((response) => alert(`El hamburger "${response.name}" se ha creado satisfactoriamente.`)),
        tap(() => this.router.navigate(["/orders"]))
      ).subscribe();
  }

  onReset() {
    this.form.reset({
      name: '',
      price: '',
      ingredients: []
    });
  }

}
