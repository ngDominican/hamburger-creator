import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShellComponent } from './core/components/shell/shell.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', component: ShellComponent, children: [
      { path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) }
    ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
