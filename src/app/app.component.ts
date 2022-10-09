import { Component } from '@angular/core';
import { AuthWelcomeComponent } from './auth-welcome/auth-welcome.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // homecomponent = HomeComponent;
  // authWelcomeComponent = AuthWelcomeComponent;
  // loginComponent = LoginComponent;
  // registrationComponent = RegisterComponent;
  // forgotPasswordComponent = ForgotPasswordComponent;
  // navComponent = NavComponent;
  // public appPages = [
  //   { title: 'Home', url: '/home', icon: 'home' },
  //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() { }

}
