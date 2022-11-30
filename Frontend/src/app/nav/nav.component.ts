import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Traveler } from '../interface/traveler';
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
  public adminPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Add Char Dham', url: '/admin-add-char-dham', icon: 'flag' },
    { title: 'Add Other Places', url: '/admin-add-other-places', icon: 'bus' },
    { title: 'Add Hotels', url: '/admin-add-hotelss', icon: 'cafe' },
    { title: 'My Profile', url: '/admin-profile', icon: 'person' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  isAuthenticatedTraveler = false;
  isAuthenticatedAdmin = false;
  traveler: Traveler;
  admin: Traveler;
  constructor(private sessionService: SessionService, private router: Router) { }
  ngOnInit() {
    if (this.sessionService.isTravelerLoggedIn()) {
      this.isAuthenticatedTraveler = true;
      this.traveler = this.sessionService.getTravelerCurrentSession();
    }
    else if (this.sessionService.isAdminLoggedIn()) {
      this.isAuthenticatedAdmin = true;
      this.admin = this.sessionService.getTravelerCurrentSession();
    }
    else {
      this.isAuthenticatedTraveler = false;
      this.router.navigateByUrl('/welcome');
    }
  }
  logTravelerOut() {
    this.sessionService.logTravelerOut();
    window.location.reload();
  }

}
