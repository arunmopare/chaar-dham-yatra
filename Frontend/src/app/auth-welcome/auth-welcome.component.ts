import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { SessionService } from '../Services/session.service';

@Component({
  selector: 'app-auth-welcome',
  templateUrl: './auth-welcome.component.html',
  styleUrls: ['./auth-welcome.component.scss'],
})
export class AuthWelcomeComponent implements OnInit {
  @ViewChild(IonSlides) slides: IonSlides;

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    if (this.sessionService.isTravelerLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
    else if (this.sessionService.isAdminLoggedIn()) {
      this.router.navigateByUrl('/admin-home');
    }
  }
  next() {
    this.slides.slideNext();
  }
}
