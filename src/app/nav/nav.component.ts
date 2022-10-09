import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Char Dham', url: '/char-dham', icon: 'flag' },
    { title: 'Visited Places', url: '/visited-places', icon: 'bus' },
    { title: 'Hotels', url: '/hotels', icon: 'cafe' },
    { title: 'My Profile', url: '/my-profile', icon: 'person' },
    { title: 'Forgot Password', url: '/forgot-password', icon: 'settings' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor() { }

  ngOnInit() { }

}
