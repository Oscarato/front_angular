import { Component } from '@angular/core';
import { UsersService } from '../users/users.service';
import { AlertsService } from 'angular-alert-module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;
  constructor(public userService: UsersService, private alerts: AlertsService) { }
  login(): any {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(data => {
      if (!data.response){
        return this.alerts.setMessage(data.message, 'error');
      }
      this.userService.setToken(data.token);
    });
  }
}
