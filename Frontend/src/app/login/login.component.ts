import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TravelerService } from '../Services/traveler.service';
import { Traveler } from '../interface/traveler';
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
  }
  onLoginClick(data) {
    if (data.form.status === 'VALID') {
      this.travelerService.travelerLogin(data.form.value).subscribe(
        res => {
          this.sessionService.createTravelerSession(res);
          this.router.navigateByUrl('/home').then(() => {
            window.location.reload();
          });
        },
        err => this.error = err.error.err
      );
      // send data to api
    }
  }
}
