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
  user: User = {
    email: '',
    password: '',
  }

  submit(): void {
      this.authSvc.login(this.user).then((res) => {
        if (res == 200) {
          this.resetUser();
          this.router.navigate([''])
        }
        else {
          this.isLoginValid = false;
          this.resetUser()
        }
      });
  }

  resetUser(): void {
    this.user = {
      email: '',
      password: '',
    }
  }

}
