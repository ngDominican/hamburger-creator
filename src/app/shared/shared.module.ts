import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HamburgerViewerComponent } from './components/hamburger-viewer/hamburger-viewer.component';

const declarations = [HamburgerViewerComponent];

@NgModule({
  declarations: [...declarations],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ...declarations
  ]
})
export class SharedModule { }
