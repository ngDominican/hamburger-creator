import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HamburgerCreatorComponent } from './hamburger-creator/hamburger-creator.component';

const routes: Routes = [
  { path: '', component: HamburgerCreatorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatorRoutingModule { }
