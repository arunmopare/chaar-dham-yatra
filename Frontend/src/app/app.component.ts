import { Component } from '@angular/core';
import { AuthWelcomeComponent } from './common/auth-welcome/auth-welcome.component';
import { ForgotPasswordComponent } from './travelers/forgot-password/forgot-password.component';
import { HomeComponent } from './travelers/home/home.component';
import { LoginComponent } from './common/login/login.component';
import { NavComponent } from './common/nav/nav.component';
import { RegisterComponent } from './common/register/register.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }

}
