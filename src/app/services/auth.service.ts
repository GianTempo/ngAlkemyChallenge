import { Injectable } from '@angular/core';
import { User } from '@app/models/user.interface';
import { environment } from '@env/environment';
import  Axios, { AxiosResponse } from 'axios';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor (private router: Router) {
   }
  
  /**
   * @function login()
   * @param {User} user - User with email and password 
   * Function that recieves an user's credentials and validates it.
   * @returns {number} The status code of the validation.
  */
  login(user: User): Promise<number> {
    return Axios({
      method: 'post',
      url: `${environment.AUTH_API_URL}`,
      data: {
        "email": user.email,
        "password": user.password,
      }
    })
      .then(function (response) {
        localStorage.setItem("token", response.data.token);
        return response.status;
      })
      .catch(function (err) {
        return err.status;
      })
    
  }

  /**
   * @function logout()
   * It removes the user's token to log him out of the app.
   * This function is only accessible if the user is already logged in.
  */
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
