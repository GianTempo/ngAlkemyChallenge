import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/services/auth.service';
import { User } from "../../models/user.interface";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor (private authSvc: AuthService,
  private router: Router) { }

  ngOnInit(): void {
  }

  isLoginValid: boolean = true; //Parameter to validate if login is successful or not.
  isUserEmpty: boolean = undefined; //Parameter to validate if the email or password of the user is empty when user sends the login request.
  user: User = {
    email: '',
    password: '',
  }

  submit(): void {
    if (this.user.email == '' || this.user.password == '') {
      this.isUserEmpty = true;
    }
    else if(this.user.email !== '' || this.user.password !== '') {
      this.isUserEmpty = false;
      this.authSvc.login(this.user).then((res) => {
        if (res == 200) {
          this.isLoginValid = true;
          this.resetUser();
          this.router.navigate(['/home'])
        }
        else {
          this.isLoginValid = false;
          this.resetUser()
        }
      });
    }
  }

  resetUser(): void {
    this.user = {
      email: '',
      password: '',
    }
  }

}
