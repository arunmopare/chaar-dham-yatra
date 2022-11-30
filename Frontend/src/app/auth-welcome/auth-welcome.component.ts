import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../Services/session.service';

@Component({
  selector: 'app-auth-welcome',
  templateUrl: './auth-welcome.component.html',
  styleUrls: ['./auth-welcome.component.scss'],
})
export class AuthWelcomeComponent implements OnInit {

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    if (this.sessionService.isTravelerLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
    else if (this.sessionService.isAdminLoggedIn()) {
      this.router.navigateByUrl('/admin-home');
    }
  }

}
