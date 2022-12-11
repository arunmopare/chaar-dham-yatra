import { Component, OnInit } from '@angular/core';
import { Traveler } from 'src/app/utils/interface/traveler';
import { SessionService } from 'src/app/Services/session.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss'],
})
export class AdminProfileComponent implements OnInit {
  isEditing = false;
  isAuthenticated = false;
  traveler: Traveler;

  constructor(private sessionService: SessionService) { }

  ngOnInit() {
    if (this.sessionService.isAdminLoggedIn()) {
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
