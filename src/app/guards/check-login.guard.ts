import { Injectable } from '@angular/core';
import { CanActivate, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '@app/services/auth.service';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CheckLoginGuard implements CanActivate {
  
  constructor (private authSvc: AuthService,
    private router: Router) {
    
  }
  
  currentRoute: string;

  canActivate() {
    if (localStorage.getItem('token') !== null) {
      console.log('True')
      return true;
    }
    else {
      console.log('false')
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
