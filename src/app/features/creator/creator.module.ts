import { NgModule } from '@angular/core';
import { CreatorRoutingModule } from './creator-routing.module';
import { HamburgerCreatorComponent } from './hamburger-creator/hamburger-creator.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IngredientsViewerComponent } from './ingredients-viewer/ingredients-viewer.component';

@NgModule({
  declarations: [HamburgerCreatorComponent, IngredientsViewerComponent],
  imports: [
    SharedModule,
    CreatorRoutingModule
  ]
})
export class CreatorModule { }
