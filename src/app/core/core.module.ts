import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/shell/header/header.component';
import { ShellComponent } from './components/shell/shell.component';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { MainComponent } from './components/shell/main/main.component';
import { FooterComponent } from './components/shell/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ShellComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    PagesModule,
    AuthModule
  ]
})
export class CoreModule { }
