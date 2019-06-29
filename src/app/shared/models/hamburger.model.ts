import { Ingredient } from './ingredient.model';

export interface Hamburger {
  id: number;
  name: string;
  ingredients: Ingredient[];
}
