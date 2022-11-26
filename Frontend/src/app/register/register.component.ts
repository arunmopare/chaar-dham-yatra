import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  onRegisterClick(data) {
    console.log(data);
    if (data.form.status === 'VALID') {
      // send data to api
    }
  }
}
