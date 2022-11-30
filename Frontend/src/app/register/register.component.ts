import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../Services/session.service';
import { TravelerService } from '../Services/traveler.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isError = false;
  error = '';
  constructor(private travelerService: TravelerService, private sessionService: SessionService, private router: Router) { }

  ngOnInit() { }
  onRegisterClick(data) {
    console.log(data);
    if (data.form.status === 'VALID') {
      this.travelerService.travelerRegistration(data.form.value).subscribe(
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
