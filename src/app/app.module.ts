import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CheckLoginGuard } from './guards/check-login.guard';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HerocardComponent } from './components/herocard/herocard.component';
import { TeamcardComponent } from './components/teamcard/teamcard.component';
import { AddheroComponent } from './pages/addhero/addhero.component';
import { AddheroformComponent } from './components/addheroform/addheroform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    MainPageComponent,
    HerocardComponent,
    TeamcardComponent,
    AddheroComponent,
    AddheroformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [CheckLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
