import { Component, OnInit } from '@angular/core';
import { TravelerService } from '../Services/traveler.service';
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
  }
}
