import { Component, OnInit } from '@angular/core';
import { Traveler } from '../../utils/interface/traveler';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss'],
})
export class MyProfileComponent implements OnInit {
  isEditing = false;
  isAuthenticated = false;
  traveler: Traveler;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    if (this.sessionService.isTravelerLoggedIn()) {
      this.isAuthenticated = true;
      this.traveler = this.sessionService.getTravelerCurrentSession();
    }
    else {
      this.isAuthenticated = false;
    }
  }
  onEditClick() {
    this.isEditing = true;
  }
}
