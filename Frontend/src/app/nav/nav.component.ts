import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../Services/session.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Char Dham', url: '/char-dham', icon: 'flag' },
    { title: 'Other Places', url: '/other-places', icon: 'bus' },
    { title: 'Visited Places', url: '/visited-places', icon: 'checkbox' },
    { title: 'Hotels', url: '/hotels', icon: 'cafe' },
    { title: 'My Profile', url: '/my-profile', icon: 'person' },
    { title: 'Forgot Password', url: '/forgot-password', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isAuthenticated = false;
  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    if (this.sessionService.isTravelerLoggedIn()) {
      this.isAuthenticated = true;
    }
    else {
      this.isAuthenticated = false;
      this.router.navigateByUrl('/welcome');
    }
  }

}
