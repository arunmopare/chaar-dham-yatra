import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { TravelerService } from '../../services/traveler.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isError = false;
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
  onRegisterClick(data) {
    console.log(data);
    if (data.form.status === 'VALID') {
      this.travelerService.travelerRegistration(data.form.value).subscribe(
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
