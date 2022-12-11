import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TravelerService } from '../Services/traveler.service';
import { Traveler } from '../utils/interface/traveler';
import { SessionService } from '../Services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error = '';
  constructor(private travelerService: TravelerService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
    if (this.sessionService.isTravelerLoggedIn()) {
      this.router.navigateByUrl('/home');
    }
    else if (this.sessionService.isAdminLoggedIn()) {
      this.router.navigateByUrl('/admin-home');
    }
  }
  onLoginClick(data) {
    if (data.form.status === 'VALID') {
      this.travelerService.travelerLogin(data.form.value).subscribe(
        res => {
          this.sessionService.createTravelerSession(res);
          if (res.auth.role === '00') {
            this.router.navigateByUrl('/admin-home').then(() => {
              window.location.reload();
            });
          }
          if (res.auth.role === '01') {
            this.router.navigateByUrl('/home').then(() => {
              window.location.reload();
            });
          }
        },
        err => this.error = err.error.err
      );
      // send data to api
    }
  }
}
