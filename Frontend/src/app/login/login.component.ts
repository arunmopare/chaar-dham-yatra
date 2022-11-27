import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TravelerService } from '../traveler.service';
import { Traveler } from '../interface/traveler';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error = '';
  constructor(private travelerService: TravelerService, private sessionService: SessionService) { }

  ngOnInit() { }
  onLoginClick(data) {
    if (data.form.status === 'VALID') {
      this.travelerService.travelerLogin(data.form.value).subscribe(
        res => {
          this.sessionService.createTravelerSession(res);
        },
        err => this.error = err.error.err
      );
      // send data to api
    }
  }
}
