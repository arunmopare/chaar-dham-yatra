import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-welcome',
  templateUrl: './auth-welcome.component.html',
  styleUrls: ['./auth-welcome.component.scss'],
})
export class AuthWelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // TODO: if is logged in just send him to home
  }

}
