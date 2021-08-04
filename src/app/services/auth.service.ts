import { Injectable } from '@angular/core';
import { User } from '@app/models/user.interface';
import { environment } from '@env/environment';
import  Axios, { AxiosResponse } from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor () { }
  
  login(user: User): Promise<string | number> {
    auth: AuthService;
    return Axios({
      method: 'post',
      url: `${environment.AUTH_API_URL}`,
      data: {
        "email": user.email,
        "password": user.password,
      }
    })
      .then(function (response) {
        return response.status;
        console.log(response);
        localStorage.setItem("token", response.data.token);
      })
      .catch(function (err) {
        return err.status;
      })
    
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  private readToken(): void {

  }
}
