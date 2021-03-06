import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Import components to set Routes
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MainPageComponent } from './pages/main-page/main-page.component'
import { CheckLoginGuard } from './guards/check-login.guard';
import { AddheroComponent } from './pages/addhero/addhero.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [CheckLoginGuard],
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
      },
      {
        path: 'main', 
        component: MainPageComponent,
      },
      {
        path: 'addhero',
        component: AddheroComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
