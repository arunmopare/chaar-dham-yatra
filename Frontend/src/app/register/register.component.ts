import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Traveler } from '../interface/traveler';
import { TravelerService } from '../traveler.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isError = false;
  error = '';
  constructor(private travelerService: TravelerService) { }

  ngOnInit() { }
  onRegisterClick(data) {
    console.log(data);
    if (data.form.status === 'VALID') {
      this.travelerService.travelerRegistration(data.form.value).subscribe(
        res => console.log(res),
        err => this.error = err.error.err
      );
      // send data to api
    }
    console.log('====================================');
    console.log(this.error);
    console.log('====================================');
  }
}
